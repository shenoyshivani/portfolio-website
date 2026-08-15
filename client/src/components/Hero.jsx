import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const WingsLogo = () => (
  <svg viewBox="0 0 120 100" width="80" height="66" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.08 }}>
    <path d="M60 5 L20 50 L30 50 L60 18 L90 50 L100 50 Z" fill="var(--accent)"/>
    <path d="M60 20 L35 55 L45 55 L60 35 L75 55 L85 55 Z" fill="var(--gold)"/>
    <path d="M10 55 L60 90 L110 55 L95 60 L60 80 L25 60 Z" fill="var(--text-primary)" opacity="0.5"/>
  </svg>
)

export default function Hero() {
  const roles = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem',
    }}>
      {/* Dramatic background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}>
        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,26,26,0.15) 0%, transparent 60%)',
        }} />
        {/* Gold accent glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,164,80,0.08) 0%, transparent 60%)',
        }} />
        {/* Animated floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              borderRadius: '50%',
              background: i % 2 === 0 ? 'var(--accent)' : 'var(--gold)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        {/* Horizontal scan lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
          pointerEvents: 'none',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            <WingsLogo />
          </motion.div>

          <motion.p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              fontWeight: 500,
              marginBottom: '1rem',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              color: 'var(--text-primary)',
              textShadow: '0 0 60px rgba(155,26,26,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Shivani
          </motion.h1>

          <motion.h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Shenoy
          </motion.h2>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              width: '120px',
              height: '2px',
              background: 'var(--gradient)',
              margin: '1.5rem auto',
              transformOrigin: 'center',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ height: '2rem', marginBottom: '1.5rem' }}
          >
            <Typewriter roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '550px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Computer Science student at TSEC, passionate about building AI-powered solutions
            and full-stack applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              style={{
                padding: '0.85rem 2.5rem',
                background: 'var(--gradient)',
                color: '#e8e4dd',
                borderRadius: '2px',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(155,26,26,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/11QNlvFkVBAeYQV1S7mjrd91xBT7-2qe4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.85rem 2.5rem',
                background: 'transparent',
                border: '1px solid var(--gold-dim)',
                color: 'var(--gold)',
                borderRadius: '2px',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              whileHover={{ scale: 1.05, borderColor: 'var(--gold)', boxShadow: '0 10px 40px rgba(196,164,80,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload /> Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}
          >
            {[
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivani-shenoy-593916300/' },
              { icon: FaGithub, href: 'https://github.com/shenoyshivani' },
              { icon: FaEnvelope, href: 'mailto:shivanishenoy17@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '2px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                  y: -3,
                  boxShadow: '0 5px 20px rgba(155,26,26,0.3)',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.5rem',
            }}
          >
            <HiArrowDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Typewriter({ roles }) {
  const [index, setIndex] = React.useState(0)
  const [text, setText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const currentRole = roles[index]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentRole.slice(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, roles])

  return (
    <span style={{
      fontSize: '1rem',
      fontFamily: "'Oswald', sans-serif",
      color: 'var(--text-secondary)',
      fontWeight: 400,
      letterSpacing: '3px',
      textTransform: 'uppercase',
    }}>
      {text}
      <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
