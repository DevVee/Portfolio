import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        setTimeout(() => {
          setIsOpen(false);
          setStatus('');
        }, 2000);
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

  const handleOpenEmail = () => {
    const subject = 'Hello Prince Arvee';
    const body = 'Hi Prince Arvee,\n\n[Your message here]\n\nBest regards';
    window.location.href = `mailto:arveeavena.premium@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Button to open modal */}
      <div style={styles.buttonContainer}>
        <button onClick={() => setIsOpen(true)} style={styles.contactButton}>
          ✉️ Get in Touch
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={styles.closeButton}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 style={styles.title}>Get in Touch with Me</h2>

            {/* Two Options Container */}
            <div style={{
              ...styles.optionsContainer,
              gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr',
            }}>
              {/* Option 1: Send via Form */}
              <div style={styles.optionCard}>
                <h3 style={styles.optionTitle}>Send Message Here</h3>
                <p style={styles.optionDescription}>
                  Fill the form below and I'll get back to you directly
                </p>

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
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      ...styles.submitButton,
                      opacity: loading ? 0.6 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  {status && <p style={styles.status}>{status}</p>}
                </form>
              </div>

              {/* Divider - hidden on mobile */}
              {!isMobile && (
                <div style={styles.divider}>
                  <span style={styles.dividerText}>OR</span>
                </div>
              )}

              {/* Option 2: Open Email App */}
              <div style={styles.optionCard}>
                <h3 style={styles.optionTitle}>Use Your Email</h3>
                <p style={styles.optionDescription}>
                  Open your default email client and send directly
                </p>

                <div style={styles.emailInfo}>
                  <p style={styles.emailLabel}>📧 Email Address:</p>
                  <p style={styles.emailAddress}>arveeavena.premium@gmail.com</p>
                </div>

                <button onClick={handleOpenEmail} style={styles.emailButton}>
                  📧 Open Email App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  },
  contactButton: {
    padding: '0.875rem 2rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '1rem',
  },
  modalContent: {
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    padding: '2rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#fff',
    textAlign: 'center',
  },
  optionsContainer: {
    display: 'grid',
    gap: '2rem',
    alignItems: 'stretch',
  },
  optionCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  optionTitle: {
    fontSize: '1.3rem',
    color: '#007bff',
    marginBottom: '0.5rem',
  },
  optionDescription: {
    fontSize: '0.9rem',
    color: '#aaa',
    marginBottom: '1.5rem',
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
  submitButton: {
    padding: '0.875rem 1.5rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  status: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#fff',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dividerText: {
    backgroundColor: '#1a1a2e',
    padding: '0 1rem',
    color: '#666',
    fontWeight: 'bold',
  },
  emailInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  emailLabel: {
    color: '#aaa',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  emailAddress: {
    color: '#007bff',
    fontSize: '1.2rem',
    fontWeight: '600',
    wordBreak: 'break-all',
  },
  emailButton: {
    padding: '0.875rem 1.5rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: 'auto',
  },
};
