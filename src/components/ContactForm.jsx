import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Spam bot detection
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Email sent successfully!');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus(`❌ ${data.error || 'Failed to send email'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Error sending email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Get in Touch</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Honeypot field - hidden from users */}
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

        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Your name"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="your.email@example.com"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
            placeholder="Your message here..."
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: '#fff',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '0.875rem 1.5rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    transition: 'all 0.3s ease',
  },
  status: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
};
