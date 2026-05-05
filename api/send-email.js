import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting (for Vercel, consider using Redis in production)
const rateLimitMap = new Map();
const RATE_LIMIT = 3; // 3 emails per IP per hour
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds

function sanitizeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function isRateLimited(ip) {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit) {
    rateLimitMap.set(ip, [now]);
    return false;
  }

  // Remove old requests outside the window
  const recentRequests = userLimit.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT) {
    return true;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return false;
}

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  ).trim();
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.VERCEL_URL || 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, message, honeypot } = req.body;

  // Honeypot check (spam bot detection)
  if (honeypot) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate input lengths
  if (name.length > 100 || message.length > 5000 || email.length > 254) {
    return res.status(400).json({ error: 'Input exceeds maximum length' });
  }

  // Validate email format
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Validate name contains only safe characters
  if (!/^[a-zA-Z0-9\s\-'.,]+$/.test(name)) {
    return res.status(400).json({ error: 'Name contains invalid characters' });
  }

  try {
    const sanitizedName = sanitizeHtml(name.trim());
    const sanitizedMessage = sanitizeHtml(message.trim());
    const sanitizedEmail = email.trim().toLowerCase();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arveeavena.premium@gmail.com',
      replyTo: sanitizedEmail,
      subject: `New message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
