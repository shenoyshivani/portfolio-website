import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = {
    college: 'Thadomal Shahani Engineering College',
    location: 'Mumbai, Maharashtra',
    degree: 'B.E. in Computer Science and Engineering',
    cgpa: '8.49',
    period: 'Aug 2023 - Present',
    courses: ['Computer Networks', 'Database Management Systems', 'Operating System', 'Object Oriented Programming'],
  }

  const certifications = [
    {
      name: 'Full Stack Development',
      issuer: 'Udemy',
      period: 'Jun 2024 - Jan 2025',
      link: 'https://drive.google.com/file/d/12GaihxqcmUPmU7I5CPlA3kQv0-f5izzy/view?usp=sharing',
    },
    {
      name: 'Simple Games Using Python',
      issuer: 'Udemy',
      period: 'Feb 2025',
      link: 'https://drive.google.com/file/d/1sNJVEpaBy74FQ57jvYHeQqmS2bwPAGMa/view?usp=sharing',
    },
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
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
            My Journey
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}>
            Education & <span style={{ color: 'var(--accent)' }}>Certifications</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '4px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
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
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '4px',
                background: 'rgba(155,26,26,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <HiAcademicCap style={{ fontSize: '1.3rem', color: 'var(--accent)' }} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                }}>
                  Education
                </h3>
              </div>
            </div>

            <h4 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '0.25rem',
            }}>
              {education.degree}
            </h4>
            <p style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--gold)',
              marginBottom: '0.25rem',
              letterSpacing: '0.5px',
            }}>
              {education.college}
            </p>
            <p style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
            }}>
              {education.location} | {education.period}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(196,164,80,0.1)',
              borderRadius: '4px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(196,164,80,0.2)',
            }}>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
              }}>
                CGPA:
              </span>
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--gold)',
              }}>
                {education.cgpa}
              </span>
            </div>

            <div>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: 'var(--gold)',
              }}>
                Relevant Coursework
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {education.courses.map(course => (
                  <span key={course} style={{
                    padding: '0.3rem 0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    letterSpacing: '0.5px',
                  }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '4px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '3px',
              height: '100%',
              background: 'var(--gradient-gold)',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '4px',
                background: 'rgba(196,164,80,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <HiBadgeCheck style={{ fontSize: '1.3rem', color: 'var(--gold)' }} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                }}>
                  Certifications
                </h3>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    display: 'block',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    borderColor: 'var(--gold)',
                    scale: 1.02,
                  }}
                >
                  <h4 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                  }}>
                    {cert.name}
                  </h4>
                  <p style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '0.85rem',
                    color: 'var(--gold)',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                  }}>
                    {cert.issuer}
                  </p>
                  <p style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                  }}>
                    {cert.period}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
