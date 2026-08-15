import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa'
import axios from 'axios'

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
      const res = await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: res.data.message })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.error || 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'shivanishenoy17@gmail.com', href: 'mailto:shivanishenoy17@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 7058144485', href: 'tel:+917058144485' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Mumbai, Maharashtra', href: null },
    { icon: FaLanguage, label: 'Languages', value: 'English, Marathi, Hindi, Konkani', href: null },
  ]

  const socials = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/shenoyshivani', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:shivanishenoy17@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Contact <span style={{ color: 'var(--accent)' }}>Me</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            marginTop: '1rem',
            maxWidth: '500px',
            margin: '1rem auto 0',
          }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient)',
              }} />

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '1.5rem',
              }}>
                Let's Connect
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}>
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: 'var(--accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <info.icon style={{ color: 'var(--accent)', fontSize: '1.1rem' }} />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.15rem',
                      }}>
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                          transition: 'color 0.3s',
                        }}>
                          {info.value}
                        </a>
                      ) : (
                        <p style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                        }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                }}>
                  Follow Me
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                        y: -3,
                      }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient)',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  color: 'var(--text-secondary)',
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  placeholder="Subject"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  color: 'var(--text-secondary)',
                }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  placeholder="Your message..."
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    background: status.type === 'success' ? '#10b98115' : '#ef444415',
                    color: status.type === 'success' ? '#10b981' : '#ef4444',
                    border: `1px solid ${status.type === 'success' ? '#10b98130' : '#ef444430'}`,
                  }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  background: isSubmitting ? 'var(--text-muted)' : 'var(--gradient)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 10px 30px var(--accent-glow)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
