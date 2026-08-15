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
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            My Journey
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
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
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
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
              right: 0,
              height: '3px',
              background: 'var(--gradient-pink)',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'var(--color-1)30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <HiAcademicCap style={{ fontSize: '1.5rem', color: 'var(--color-1)' }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  Education
                </h3>
              </div>
            </div>

            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.25rem',
            }}>
              {education.degree}
            </h4>
            <p style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '0.25rem',
            }}>
              {education.college}
            </p>
            <p style={{
              fontSize: '0.85rem',
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
              background: 'var(--color-4)20',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}>
                CGPA:
              </span>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-4)',
              }}>
                {education.cgpa}
              </span>
            </div>

            <div>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
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
                    padding: '0.35rem 0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
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
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
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
              right: 0,
              height: '3px',
              background: 'var(--gradient-blue)',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'var(--color-3)30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <HiBadgeCheck style={{ fontSize: '1.5rem', color: 'var(--color-3)' }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
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
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    display: 'block',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    borderColor: 'var(--accent)',
                    scale: 1.02,
                  }}
                >
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                    color: 'var(--text-primary)',
                  }}>
                    {cert.name}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    fontWeight: 500,
                  }}>
                    {cert.issuer}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
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
