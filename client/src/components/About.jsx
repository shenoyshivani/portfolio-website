import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{
      padding: '6rem 3rem',
      background: 'var(--green)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 700,
            color: 'var(--white)',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            The Girl Behind
            <br />
            <span style={{ color: 'var(--chartreuse)' }}>the Code</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
            maxWidth: '500px',
          }}>
            I'm a Computer Science student at Thadomal Shahani Engineering College, Mumbai.
            With a strong foundation in full-stack development and AI/ML, I love creating
            innovative solutions that solve real-world problems.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            maxWidth: '500px',
          }}>
            From building AI-powered RAG assistants to fashion recommendation systems, I constantly
            push myself to learn new technologies. When I'm not coding, you'll find me singing,
            dancing, or drawing!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width: 'min(340px, 100%)',
            height: '420px',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, var(--chartreuse), var(--teal))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '7rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            position: 'relative',
          }}>
            <span style={{ position: 'relative', zIndex: 1 }}>👩‍🎓</span>
            {/* Decorative corner accents */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--magenta)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-10px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--chartreuse)',
            }} />
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          maxWidth: '900px',
          margin: '4rem auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
        className="stats-grid"
      >
        {[
          { value: '2+', label: 'Projects' },
          { value: '8.49', label: 'CGPA' },
          { value: '10+', label: 'Skills' },
          { value: '4', label: 'Languages' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--chartreuse)',
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '0.2rem',
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; text-align: center; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
