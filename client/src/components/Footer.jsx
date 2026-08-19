import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--dark-green)',
      color: 'white',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3.5rem 2rem 1.5rem',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'var(--chartreuse)',
          marginBottom: '1.5rem',
        }}>
          Let's Work Together
        </h3>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          {['Work', 'About', 'Skills', 'Experience', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.7)',
              transition: 'color 0.2s',
            }}>
              {link}
            </a>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.7rem',
          marginBottom: '2.5rem',
        }}>
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
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.1)',
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

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            Made with <FaHeart style={{ color: 'var(--magenta)', fontSize: '0.7rem' }} /> by Shivani Shenoy
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'var(--magenta)',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
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
    </footer>
  )
}
