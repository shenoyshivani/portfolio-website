import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    color: 'var(--magenta)',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" style={{
      padding: '5rem 2rem',
      background: 'var(--cream)',
    }}>
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--teal)',
          }}>
            Where I've Worked ✦
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '22px',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'var(--pink)',
            borderRadius: '2px',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{
                position: 'relative',
                paddingLeft: '56px',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{
                position: 'absolute',
                left: '10px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: exp.color,
                border: '4px solid var(--cream)',
              }} />

              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  background: 'var(--white)',
                  borderRadius: '20px',
                  padding: '1.8rem',
                  boxShadow: 'var(--shadow-card)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: exp.color,
                }} />

                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: exp.color,
                  background: `color-mix(in srgb, ${exp.color} 10%, white)`,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '0.8rem',
                }}>
                  {exp.period}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '0.3rem',
                }}>
                  {exp.role}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: exp.color,
                  marginBottom: '0.2rem',
                }}>
                  {exp.company}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: '#999',
                  marginBottom: '1rem',
                }}>
                  {exp.fullCompany} · {exp.location}
                </p>

                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                }}>
                  {exp.description.map((desc, di) => (
                    <li key={di} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.7rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: '#555',
                      lineHeight: 1.6,
                    }}>
                      <span style={{
                        minWidth: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: exp.color,
                        marginTop: '8px',
                        flexShrink: 0,
                      }} />
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
