import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    color: 'var(--color-1)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'var(--color-4)',
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
    color: 'var(--color-3)',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Developer Tools',
    color: 'var(--color-2)',
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
            What I Know
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
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
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--border)',
              }}
            >
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: category.color,
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: `2px solid ${category.color}30`,
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
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: catIndex * 0.15 + skillIndex * 0.1,
                        ease: 'easeOut',
                      }}
                      style={{
                        height: '100%',
                        background: category.color,
                        borderRadius: '3px',
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
