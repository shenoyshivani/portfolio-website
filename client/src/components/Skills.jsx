import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'JavaScript'],
    color: 'var(--magenta)',
    emoji: '💻',
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'Streamlit', 'LangChain'],
    color: 'var(--teal)',
    emoji: '⚡',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL'],
    color: 'var(--orange)',
    emoji: '🗄️',
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'Postman', 'REST APIs', 'JWT'],
    color: 'var(--green)',
    emoji: '🛠️',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" style={{
      padding: '5rem 3rem',
      background: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.1,
          }}>
            What I Bring
            <br />
            <span style={{ color: 'var(--magenta)' }}>to the Table</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 0.9fr',
          gridTemplateRows: 'auto auto',
          gap: '1.2rem',
        }} className="collage-grid">
          {skillCategories.map((cat, i) => {
            const offsets = [
              { gridColumn: '1 / 2', gridRow: '1 / 2', rotate: -2 },
              { gridColumn: '2 / 3', gridRow: '1 / 3', rotate: 1 },
              { gridColumn: '3 / 4', gridRow: '1 / 2', rotate: 3 },
              { gridColumn: '1 / 2', gridRow: '2 / 3', rotate: 2 },
            ]
            const off = offsets[i]

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30, rotate: off.rotate * 2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: off.rotate } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.04, rotate: 0, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                style={{
                  ...off,
                  background: `color-mix(in srgb, ${cat.color} 8%, white)`,
                  borderRadius: '20px',
                  padding: '1.8rem',
                  border: `2px solid color-mix(in srgb, ${cat.color} 20%, white)`,
                  transition: 'box-shadow 0.3s ease',
                  alignSelf: 'start',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{cat.emoji}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: cat.color,
                  }}>
                    {cat.title}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {cat.skills.map(skill => (
                    <span key={skill} style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '50px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: cat.color,
                      color: 'white',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .collage-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .collage-grid > * {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
