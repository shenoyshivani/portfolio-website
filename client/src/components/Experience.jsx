import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    company: 'CSI-TSEC',
    fullCompany: 'Computer Society of India',
    location: 'Mumbai, Maharashtra',
    role: 'Social Media Manager',
    period: 'May 2025 - Mar 2026',
    description: [
      'Managed and optimized social media content strategy, increasing student engagement and digital reach.',
      'Led digital communication efforts, ensuring consistent branding and timely content delivery.',
      'Organized and supported major college events including fests, convocation and flagship events as a part of the core team.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
    }}>
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
            Where I've Worked
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}>
            My <span style={{ color: 'var(--accent)' }}>Experience</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(180deg, var(--accent), var(--gold), var(--accent))',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{
                position: 'relative',
                paddingLeft: '55px',
                marginBottom: '3rem',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '12px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '3px solid var(--bg-primary)',
                boxShadow: '0 0 0 2px var(--accent), 0 0 20px rgba(155,26,26,0.3)',
              }} />

              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '4px',
                padding: '1.5rem',
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
                  background: 'var(--gradient-red)',
                }} />

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  <HiBriefcase style={{ color: 'var(--accent)', fontSize: '1rem' }} />
                  <span style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontWeight: 400,
                    letterSpacing: '1px',
                  }}>
                    {exp.period}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}>
                  {exp.role}
                </h3>

                <p style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--gold)',
                  marginBottom: '0.25rem',
                  letterSpacing: '0.5px',
                }}>
                  {exp.company} <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>| {exp.fullCompany}</span>
                </p>

                <p style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  letterSpacing: '0.5px',
                }}>
                  {exp.location}
                </p>

                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  {exp.description.map((desc, di) => (
                    <motion.li
                      key={di}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.2 + di * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{
                        minWidth: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                        marginTop: '8px',
                      }} />
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
