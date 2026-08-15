import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const WingsLogo = () => (
  <svg viewBox="0 0 100 80" width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 8 L15 45 L25 45 L50 20 L75 45 L85 45 Z" fill="var(--text-primary)" opacity="0.6"/>
    <path d="M50 20 L30 50 L40 50 L50 35 L60 50 L70 50 Z" fill="var(--accent)" opacity="0.6"/>
    <path d="M10 50 L50 75 L90 50 L75 55 L50 68 L25 55 Z" fill="var(--gold)" opacity="0.4"/>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      padding: '3rem 2rem 1.5rem',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--gold), var(--accent), transparent)',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <WingsLogo />
            <div>
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                Shivani Shenoy
              </h3>
              <p style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                marginTop: '0.25rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                Full Stack Developer | AI Enthusiast
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/' },
              { icon: FaGithub, href: 'https://github.com/shenoyshivani' },
              { icon: FaEnvelope, href: 'mailto:shivanishenoy17@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '4px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
        }}>
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            letterSpacing: '1px',
          }}>
            Made with <FaHeart style={{ color: 'var(--accent)', fontSize: '0.7rem' }} /> by Shivani Shenoy
          </p>

          <motion.button
            onClick={scrollToTop}
            style={{
              width: 36,
              height: 36,
              borderRadius: '4px',
              background: 'var(--accent)',
              border: 'none',
              color: '#e8e4dd',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.1, y: -3, boxShadow: '0 5px 20px rgba(155,26,26,0.4)' }}
            whileTap={{ scale: 0.9 }}
          >
            <HiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
