import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const WEB3FORMS_KEY = '95015ebb-9c2a-4d15-a81a-846e53791c54'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, value: 'shivanishenoy17@gmail.com', href: 'mailto:shivanishenoy17@gmail.com', color: 'var(--magenta)' },
    { icon: FaPhone, value: '+91 7058144485', href: 'tel:+917058144485', color: 'var(--teal)' },
    { icon: FaMapMarkerAlt, value: 'Mumbai, Maharashtra', href: null, color: 'var(--orange)' },
  ]

  const socials = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/' },
    { icon: FaGithub, href: 'https://github.com/shenoyshivani' },
    { icon: FaEnvelope, href: 'mailto:shivanishenoy17@gmail.com' },
  ]

  return (
    <section id="contact" style={{
      padding: '5rem 2rem',
      background: 'var(--cream)',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--magenta)',
          }}>
            Let's Connect !
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: '#666',
            marginTop: '0.8rem',
          }}>
            Have a question or want to work together? Reach out!
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '2rem',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'var(--teal)',
              borderRadius: '24px',
              padding: '2.5rem',
              color: 'white',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Get In Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <info.icon style={{ fontSize: '1rem' }} />
                  </div>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: '0.9rem', color: 'white', fontWeight: 500 }}>{info.value}</a>
                  ) : (
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.1rem',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} style={{
              background: 'var(--white)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '0.4rem',
                  }}>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--cream)',
                      border: '2px solid transparent',
                      borderRadius: '12px',
                      color: '#1a1a1a',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--magenta)'}
                    onBlur={(e) => e.target.style.borderColor = 'transparent'}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '0.4rem',
                  }}>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--cream)',
                      border: '2px solid transparent',
                      borderRadius: '12px',
                      color: '#1a1a1a',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--magenta)'}
                    onBlur={(e) => e.target.style.borderColor = 'transparent'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '0.4rem',
                }}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="Subject"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--cream)',
                    border: '2px solid transparent',
                    borderRadius: '12px',
                    color: '#1a1a1a',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--magenta)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '0.4rem',
                }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Your message..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--cream)',
                    border: '2px solid transparent',
                    borderRadius: '12px',
                    color: '#1a1a1a',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--magenta)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: status.type === 'success' ? 'rgba(34,139,34,0.1)' : 'rgba(255,69,0,0.1)',
                    color: status.type === 'success' ? 'var(--green)' : 'var(--orange)',
                  }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="pill-btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: isSubmitting ? '#ccc' : 'var(--magenta)',
                  color: 'white',
                  fontSize: '1rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
                whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message '}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
