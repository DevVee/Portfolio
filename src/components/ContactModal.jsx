import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | string (error)

  const close = useCallback(() => onClose(), [onClose]);

  // Escape key to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setTimeout(close, 2200);
      } else {
        setStatus(data.error ?? 'Something went wrong. Try again.');
      }
    } catch {
      setStatus('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenApp = () => {
    const s = encodeURIComponent('Hello Prince Arvee!');
    const b = encodeURIComponent('Hi Prince Arvee,\n\n');
    window.open(`mailto:princearveeavena@gmail.com?subject=${s}&body=${b}`);
  };

  return createPortal(
    <div className="cm-overlay" onClick={close}>
      <div className="cm-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="cm-title">

        {/* Header */}
        <div className="cm-header">
          <div>
            <div className="cm-title" id="cm-title">Get in Touch</div>
            <div className="cm-subtitle">Send a message or open your email app</div>
          </div>
          <button className="cm-close" onClick={close} aria-label="Close dialog">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="cm-body">

          {/* LEFT — form */}
          <div className="cm-panel">
            <div className="cm-panel-label">Send message here</div>
            <p className="cm-panel-desc">Fill in the form and I'll reply to your email</p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — invisible to users, catches bots */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="cm-field">
                <label htmlFor="cm-name" className="cm-label">Name</label>
                <input
                  id="cm-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="cm-input"
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={loading || status === 'success'}
                />
              </div>

              <div className="cm-field">
                <label htmlFor="cm-email" className="cm-label">Email</label>
                <input
                  id="cm-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className="cm-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={loading || status === 'success'}
                />
              </div>

              <div className="cm-field">
                <label htmlFor="cm-message" className="cm-label">Message</label>
                <textarea
                  id="cm-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  className="cm-textarea"
                  placeholder="What would you like to say?"
                  rows="5"
                  disabled={loading || status === 'success'}
                />
              </div>

              {status === 'success' ? (
                <div className="cm-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message sent! I'll get back to you soon.
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary cm-submit"
                  >
                    {loading ? (
                      <span className="cm-spinner" />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    )}
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                  {typeof status === 'string' && status !== 'success' && (
                    <div className="cm-error">{status}</div>
                  )}
                </>
              )}
            </form>
          </div>

          {/* Divider */}
          <div className="cm-divider">
            <span className="cm-or">or</span>
          </div>

          {/* RIGHT — open email app */}
          <div className="cm-panel cm-panel-right">
            <div className="cm-panel-label">Use your email app</div>
            <p className="cm-panel-desc">Opens Gmail, Outlook, Apple Mail, or any default client</p>

            <div className="cm-email-card">
              <div className="cm-email-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <polyline points="3,5 12,13 21,5" />
                </svg>
              </div>
              <div className="cm-email-addr">princearveeavena@gmail.com</div>
              <div className="cm-email-note">Click below to compose in your preferred email client</div>
              <button onClick={handleOpenApp} className="btn cm-app-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open Email App
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
