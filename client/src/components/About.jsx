import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUser, HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: 'Projects', value: '2+', icon: HiCode },
    { label: 'CGPA', value: '8.49', icon: HiLightningBolt },
    { label: 'Skills', value: '10+', icon: HiGlobe },
    { label: 'Languages', value: '4', icon: HiUser },
  ]

  return (
    <section id="about" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      {/* Top border accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--gold), var(--accent), transparent)',
      }} />

      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '0.8rem',
            color: 'var(--gold)',
            fontWeight: 500,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Get To Know Me
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}>
            About <span style={{ color: 'var(--accent)' }}>Me</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '4px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: 'var(--gradient)',
              }} />
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--gold)',
              }}>
                Who I Am
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
                fontSize: '0.95rem',
              }}>
                I'm a passionate Computer Science student at Thadomal Shahani Engineering College, Mumbai.
                With a strong foundation in full-stack development and AI/ML, I love creating innovative
                solutions that solve real-world problems.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
              }}>
                From building AI-powered RAG assistants to fashion recommendation systems, I constantly
                push myself to learn new technologies and take on challenging projects. When I'm not coding,
                you'll find me singing, dancing, or drawing!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent)',
                  transition: { duration: 0.2 },
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: i % 2 === 0 ? 'var(--gradient-red)' : 'var(--gradient-gold)',
                }} />
                <stat.icon style={{
                  fontSize: '1.5rem',
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--gold)',
                  marginBottom: '0.5rem',
                }} />
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
