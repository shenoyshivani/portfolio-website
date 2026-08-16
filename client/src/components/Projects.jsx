import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'RAG Assistant',
    subtitle: 'AI-Powered Query System',
    tech: ['Python', 'ChromaDB', 'Groq', 'Streamlit'],
    color: 'var(--magenta)',
    emoji: '🤖',
  },
  {
    title: 'Fashion Reco',
    subtitle: 'AI Fashion Stylist',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'ML'],
    color: 'var(--teal)',
    emoji: '👗',
  },
  {
    title: 'Portfolio Site',
    subtitle: 'Full-Stack Web App',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'var(--orange)',
    emoji: '🌐',
  },
]

const Sparkle = ({ style }) => (
  <span style={{ color: 'var(--chartreuse)', fontSize: '1.4rem', userSelect: 'none', ...style }}>✦</span>
)

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" style={{
      padding: '5rem 2rem',
      background: 'var(--cream)',
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
            color: 'var(--magenta)',
          }}>
            Featured Work ✦
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: project.color,
              }} />

              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: `color-mix(in srgb, ${project.color} 15%, white)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 1.2rem',
              }}>
                {project.emoji}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.3rem',
              }}>
                {project.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: '#888',
                marginBottom: '1rem',
              }}>
                {project.subtitle}
              </p>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '1.2rem',
              }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: '50px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    background: `color-mix(in srgb, ${project.color} 10%, white)`,
                    color: project.color,
                    border: `1px solid color-mix(in srgb, ${project.color} 25%, white)`,
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: project.color,
                }}
                whileHover={{ x: 4 }}
              >
                View Project <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Sparkle spacers between cards row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '2.5rem',
        }}>
          <Sparkle />
          <Sparkle />
          <Sparkle />
        </div>
      </div>
    </section>
  )
}
