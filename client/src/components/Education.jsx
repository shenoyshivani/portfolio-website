import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const education = {
  college: 'Thadomal Shahani Engineering College',
  location: 'Mumbai, Maharashtra',
  degree: 'B.E. in Computer Science and Engineering',
  cgpa: '8.49',
  period: 'Aug 2023 - Present',
  courses: ['Computer Networks', 'DBMS', 'Operating System', 'OOP'],
}

const certifications = [
  {
    name: 'Full Stack Development',
    issuer: 'Udemy',
    period: 'Jun 2024 - Jan 2025',
    link: 'https://drive.google.com/file/d/12GaihxqcmUPmU7I5CPlA3kQv0-f5izzy/view?usp=sharing',
    color: 'var(--magenta)',
  },
  {
    name: 'Simple Games Using Python',
    issuer: 'Udemy',
    period: 'Feb 2025',
    link: 'https://drive.google.com/file/d/1sNJVEpaBy74FQ57jvYHeQqmS2bwPAGMa/view?usp=sharing',
    color: 'var(--teal)',
  },
  {
    name: 'Agentic AI for Fintech Enterprises',
    issuer: 'TSEC',
    period: '2025',
    link: 'https://drive.google.com/file/d/1EGu3fzuSQYV8SLnNuUduT4HCOamo59eR/view?usp=sharing',
    color: 'var(--orange)',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'var(--white)',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            color: 'var(--orange)',
          }}>
            Education & Certifications ✦
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            style={{
              background: 'var(--cream)',
              borderRadius: '20px',
              padding: '2rem',
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
              background: 'var(--orange)',
            }} />

            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🎓</span>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '0.3rem',
            }}>
              Education
            </h3>

            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '0.2rem',
            }}>
              {education.degree}
            </h4>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'var(--orange)',
              fontWeight: 600,
              marginBottom: '0.2rem',
            }}>
              {education.college}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: '#999',
              marginBottom: '1rem',
            }}>
              {education.location} · {education.period}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,69,0,0.08)',
              borderRadius: '12px',
              marginBottom: '1.2rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: '#666',
              }}>CGPA:</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--orange)',
              }}>{education.cgpa}</span>
            </div>

            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: '0.6rem',
              }}>Coursework</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {education.courses.map(c => (
                  <span key={c} style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: 'var(--white)',
                    color: 'var(--orange)',
                    border: '1px solid rgba(255,69,0,0.2)',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{
              background: 'var(--cream)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--teal)',
              }} />

              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>📜</span>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '1.2rem',
              }}>
                Certifications
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {certifications.map((cert, i) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    style={{
                      padding: '1rem',
                      background: 'var(--white)',
                      borderRadius: '14px',
                      display: 'block',
                      borderLeft: `4px solid ${cert.color}`,
                    }}
                  >
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      marginBottom: '0.2rem',
                    }}>{cert.name}</h4>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: cert.color,
                      fontWeight: 600,
                    }}>{cert.issuer}</p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: '#999',
                      marginTop: '0.15rem',
                    }}>{cert.period}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
