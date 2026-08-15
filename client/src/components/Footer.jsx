import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      padding: '3rem 2rem 1.5rem',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
    }}>
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
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Shivani Shenoy
            </h3>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              marginTop: '0.25rem',
            }}>
              Full Stack Developer | AI Enthusiast
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
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
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
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
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Made with <FaHeart style={{ color: '#ef4444', fontSize: '0.8rem' }} /> by Shivani Shenoy
          </p>

          <motion.button
            onClick={scrollToTop}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'var(--accent)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
