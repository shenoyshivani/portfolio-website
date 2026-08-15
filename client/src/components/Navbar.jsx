import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const WingsLogo = () => (
  <svg viewBox="0 0 100 80" width="32" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 8 L15 45 L25 45 L50 20 L75 45 L85 45 Z" fill="var(--text-primary)" opacity="0.9"/>
    <path d="M50 20 L30 50 L40 50 L50 35 L60 50 L70 50 Z" fill="var(--accent)"/>
    <path d="M10 50 L50 75 L90 50 L75 55 L50 68 L25 55 Z" fill="var(--gold)" opacity="0.7"/>
  </svg>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <motion.a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <WingsLogo />
          <span>SHIVANI</span>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: activeSection === link.href.slice(1) ? 'var(--gold)' : 'var(--text-secondary)',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              whileHover={{ color: 'var(--gold)' }}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--gradient)',
                    borderRadius: 1,
                  }}
                />
              )}
            </motion.a>
          ))}

          <motion.button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
            }}
            whileHover={{ scale: 1.1, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <HiSun /> : <HiMoon />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <motion.button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              marginRight: '0.5rem',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <HiSun /> : <HiMoon />}
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'var(--bg-card)',
              borderRadius: '12px',
              marginTop: '1rem',
              padding: '1rem',
              border: '1px solid var(--border)',
            }}
            className="mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.8rem 1rem',
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  color: activeSection === link.href.slice(1) ? 'var(--gold)' : 'var(--text-secondary)',
                  fontWeight: activeSection === link.href.slice(1) ? 600 : 400,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
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
