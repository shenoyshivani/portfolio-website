import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #FF1493 100%)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 3rem 4rem',
    }}>
      {/* Dot grid texture - top right */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        opacity: 0.12,
        backgroundImage: 'radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Scattered sparkles */}
      {['✦', '✧', '⋆', '✦', '✧'].map((s, i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            fontSize: `${18 + i * 6}px`,
            color: 'var(--chartreuse)',
            top: `${15 + i * 18}%`,
            left: `${5 + i * 20}%`,
            opacity: 0.6,
            pointerEvents: 'none',
          }}
          animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, repeatType: 'reverse' }}
        >
          {s}
        </motion.span>
      ))}

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">
        <div>
          {/* Tilted wordmark */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ transform: 'rotate(-3deg)', transformOrigin: 'left center', marginBottom: '1rem' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 700,
              color: 'var(--white)',
              lineHeight: 1,
              textShadow: '4px 4px 0px rgba(0,0,0,0.08)',
            }}>
              Shivani
            </h1>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1,
              marginLeft: '2rem',
              textShadow: '3px 3px 0px rgba(255,255,255,0.3)',
            }}>
              Shenoy
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ height: '2.2rem', marginBottom: '1.5rem' }}
          >
            <Typewriter roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#4a2040',
              maxWidth: '480px',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Computer Science student building AI-powered solutions and full-stack apps
            that actually make a difference.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pill-btn"
            style={{
              background: 'var(--white)',
              color: 'var(--magenta)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
            whileTap={{ scale: 0.96 }}
          >
            Let's Talk <HiArrowRight />
          </motion.a>
        </div>

        {/* Photo area */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          className="hero-photo"
        >
          <div style={{
            width: 'min(420px, 100%)',
            height: '520px',
            borderRadius: '24px',
            background: 'linear-gradient(160deg, var(--chartreuse) 0%, var(--orange) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1))',
            }} />
            <span style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}>👩‍💻</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-photo { justify-content: center !important; }
        }
      `}</style>
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
    }, isDeleting ? 40 : 90)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, roles])

  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      color: '#1a1a1a',
      fontWeight: 600,
    }}>
      {text}
      <span style={{ animation: 'blink 1s infinite', color: 'var(--chartreuse)' }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
