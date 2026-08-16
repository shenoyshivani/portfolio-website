import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--dark-green)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '4rem 2rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.2fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">
          {/* Column 1 - Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--chartreuse)',
              marginBottom: '1rem',
            }}>
              Navigate
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Work', 'About', 'Skills', 'Experience', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                }}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--chartreuse)',
              marginBottom: '1rem',
            }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/' },
                { label: 'GitHub', href: 'https://github.com/shenoyshivani' },
                { label: 'Email', href: 'mailto:shivanishenoy17@gmail.com' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Email Signup */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--chartreuse)',
              marginBottom: '1rem',
            }}>
              Stay in the Loop
            </h4>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}>
              Drop your email for updates and good vibes.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: '0.7rem 1rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.7rem 1.4rem',
                  borderRadius: '50px',
                  background: 'var(--magenta)',
                  color: 'white',
                  border: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem' }}>
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/' },
                { icon: FaGithub, href: 'https://github.com/shenoyshivani' },
                { icon: FaEnvelope, href: 'mailto:shivanishenoy17@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1rem',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            Made with <FaHeart style={{ color: 'var(--magenta)', fontSize: '0.75rem' }} /> by Shivani Shenoy
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--magenta)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <HiArrowUp />
          </motion.button>
        </div>
      </div>

      {/* Large outlined wordmark bleeding off bottom */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(5rem, 15vw, 14rem)',
        fontWeight: 700,
        color: 'transparent',
        WebkitTextStroke: '2px rgba(255,255,255,0.06)',
        textAlign: 'center',
        lineHeight: 0.8,
        marginTop: '2rem',
        paddingBottom: '1rem',
        userSelect: 'none',
        overflow: 'hidden',
      }}>
        SHIVANI
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
