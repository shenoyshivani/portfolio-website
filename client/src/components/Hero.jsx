import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

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
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              borderRadius: '50%',
              background: `radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            style={{
              fontSize: '1rem',
              color: 'var(--accent)',
              fontWeight: 500,
              marginBottom: '1rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Shivani
            </span>{' '}
            Shenoy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ height: '2rem', marginBottom: '1.5rem' }}
          >
            <Typewriter roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}
          >
            Computer Science student at TSEC, passionate about building AI-powered solutions
            and full-stack applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              style={{
                padding: '0.8rem 2rem',
                background: 'var(--gradient)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px var(--accent-glow)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/11QNlvFkVBAeYQV1S7mjrd91xBT7-2qe4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.8rem 2rem',
                background: 'var(--bg-card)',
                border: '2px solid var(--border)',
                color: 'var(--text-primary)',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload /> Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
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
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
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
      fontSize: '1.2rem',
      color: 'var(--accent)',
      fontWeight: 600,
    }}>
      {text}
      <span style={{ animation: 'blink 1s infinite' }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
