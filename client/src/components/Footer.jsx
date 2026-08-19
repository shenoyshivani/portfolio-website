import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
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
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">
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
                }}>
                  {link}
                </a>
              ))}
            </div>
          </div>

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
                }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

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

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
