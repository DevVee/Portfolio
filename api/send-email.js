import { Resend } from 'resend';

const ALLOWED_ORIGINS = [
  'https://arveeavena.vercel.app',
  'http://localhost:5173',
  'http://localhost:4173',
];

const rateLimitStore = new Map();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip) ?? [];
  const recent = record.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return false;
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return true;
}

function getIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (fwd ? fwd.split(',')[0] : req.socket?.remoteAddress ?? 'unknown').trim();
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export default async function handler(req, res) {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // CORS — only set header when Origin is present (cross-origin requests)
  const origin = req.headers.origin ?? '';
  if (origin) {
    const allowed = ALLOWED_ORIGINS.includes(origin);
    res.setHeader('Access-Control-Allow-Origin', allowed ? origin : 'null');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Guard: env var must exist — if missing, Resend init throws and crashes the module
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Email service is not configured. Please contact the site owner.' });
  }

  // Rate limiting
  const ip = getIp(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in an hour.' });
  }

  const { name, email, message, honeypot } = req.body ?? {};

  // Bot trap
  if (honeypot) return res.status(400).json({ error: 'Invalid request' });

  // Required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Length limits
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ error: 'Input exceeds allowed length.' });
  }

  // Email format
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  // Name: safe characters only (supports unicode names)
  if (!/^[\p{L}\p{N}\s'\-.,]+$/u.test(name.trim())) {
    return res.status(400).json({ error: 'Name contains invalid characters.' });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = email.trim().toLowerCase();
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

  // Initialize inside handler — never at module level — so missing key is caught cleanly
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email 1 — notify Prince Arvee
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'princearveeavena@gmail.com',
      replyTo: safeEmail,
      subject: `Portfolio contact from ${safeName}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fafafa;border-radius:12px;border:1px solid #e4e4e7;">
          <h2 style="font-size:18px;font-weight:700;margin:0 0 24px;color:#18181b;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e4e4e7;width:80px;font-size:12px;color:#71717a;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e4e4e7;font-size:14px;color:#18181b;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e4e4e7;font-size:12px;color:#71717a;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e4e4e7;font-size:14px;color:#18181b;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:12px;color:#71717a;font-weight:600;text-transform:uppercase;letter-spacing:.05em;vertical-align:top;">Message</td>
              <td style="padding:10px 0;font-size:14px;color:#18181b;line-height:1.7;">${safeMessage}</td>
            </tr>
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#a1a1aa;">Sent via arveeavena.vercel.app · Hit reply to respond directly to ${safeName}.</p>
        </div>
      `,
    });

    // Email 2 — auto-reply to sender so they know it was received
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: safeEmail,
      subject: `Got your message, ${safeName}!`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fafafa;border-radius:12px;border:1px solid #e4e4e7;">
          <h2 style="font-size:18px;font-weight:700;margin:0 0 8px;color:#18181b;">Thanks for reaching out!</h2>
          <p style="font-size:14px;color:#52525b;margin:0 0 24px;line-height:1.7;">Hi ${safeName}, I received your message and will get back to you as soon as possible.</p>
          <div style="background:#f4f4f5;border-radius:8px;padding:16px 20px;border-left:3px solid #18181b;">
            <p style="font-size:12px;color:#71717a;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px;">Your message</p>
            <p style="font-size:13px;color:#3f3f46;line-height:1.7;margin:0;">${safeMessage}</p>
          </div>
          <p style="margin:24px 0 0;font-size:12px;color:#a1a1aa;">— Prince Arvee F. Avena · arveeavena.vercel.app</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err?.message ?? err);
    return res.status(500).json({ error: 'Failed to send your message. Please try again later.' });
  }
}
