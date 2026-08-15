import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Streamlit', level: 85 },
      { name: 'LangChain', level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'REST APIs', level: 80 },
      { name: 'JWT', level: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
      position: 'relative',
    }}>
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
            What I Know
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}>
            My <span style={{ color: 'var(--accent)' }}>Skills</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '4px',
                padding: '1.5rem',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--border)',
              }}
            >
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--gold)',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}>
                {category.title}
              </h3>

              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} style={{ marginBottom: '1.2rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}>
                    <span style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.5px',
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '4px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.2,
                        delay: catIndex * 0.15 + skillIndex * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        height: '100%',
                        background: skillIndex % 2 === 0 ? 'var(--gradient-red)' : 'var(--gradient-gold)',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
