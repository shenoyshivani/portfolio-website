import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2.5rem',
        background: scrolled ? 'rgba(255,182,193,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <motion.a
          href="#home"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'var(--magenta)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ color: 'var(--chartreuse)', fontSize: '1.3rem' }}>✦</span>
          SS
        </motion.a>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#1a1a1a',
                letterSpacing: '0.5px',
              }}
              whileHover={{ color: '#FF1493', y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'var(--magenta)',
              border: 'none',
              borderRadius: '12px',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              fontSize: '1.3rem',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'var(--pink)',
              borderRadius: '16px',
              marginTop: '1rem',
              padding: '1rem',
            }}
            className="mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.9rem 1.2rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#1a1a1a',
                  borderRadius: '12px',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
