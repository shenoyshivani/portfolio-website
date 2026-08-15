import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'RAG Assistant',
    subtitle: 'AI-Powered College Query System',
    description: 'Built an AI-powered Retrieval-Augmented Generation assistant to answer college-related queries by extracting and indexing information from 500+ website pages and PDF documents.',
    features: [
      'Automated data pipeline for web crawling, content cleaning, PDF text extraction',
      'Token-based semantic chunking with overlap, and vector indexing using ChromaDB',
      'BGE embeddings with hybrid semantic + keyword search and cross-encoder reranking',
      'Groq Llama-3.3-70B for multilingual, context-aware answer generation',
    ],
    tech: ['Python', 'ChromaDB', 'Groq API', 'Streamlit', 'NLP'],
    demo: 'https://drive.google.com/file/d/11QNlvFkVBAeYQV1S7mjrd91xBT7-2qe4/view?usp=drive_link',
  },
  {
    title: 'Fashion Recommendation System',
    subtitle: 'AI Fashion Stylist',
    description: 'Developed a fashion recommendation system that suggests visually similar clothing items based on uploaded images and user preferences.',
    features: [
      'Deep visual features using ResNet50 combined with HSV color histograms',
      'K-Nearest Neighbors (KNN) similarity search with feature embeddings',
      'Dataset of 22,000+ fashion images for recommendation',
      'Interactive Streamlit web application with image upload and product catalog',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit', 'ML'],
    demo: 'https://drive.google.com/file/d/18J99ZH7ZFmMAcAsu1DnMzJge3poxfhPn/view?usp=drive_link',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" style={{
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
            My Work
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}>
            Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '4px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                border: `1px solid ${hoveredProject === i ? 'var(--accent)' : 'var(--border)'}`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: i === 0 ? 'var(--gradient-red)' : 'var(--gradient-gold)',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--accent)' : 'var(--gold)',
                    }} />
                    <span style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}>
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem',
                  }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{
                        padding: '0.3rem 0.75rem',
                        background: i === 0 ? 'rgba(155,26,26,0.1)' : 'rgba(196,164,80,0.1)',
                        color: i === 0 ? 'var(--accent)' : 'var(--gold)',
                        borderRadius: '2px',
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        border: `1px solid ${i === 0 ? 'rgba(155,26,26,0.2)' : 'rgba(196,164,80,0.2)'}`,
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.6rem 1.5rem',
                        background: i === 0 ? 'var(--accent)' : 'var(--gold)',
                        color: '#e8e4dd',
                        borderRadius: '2px',
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: `0 5px 20px ${i === 0 ? 'rgba(155,26,26,0.4)' : 'rgba(196,164,80,0.4)'}` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>

                <div>
                  <h4 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    marginBottom: '1rem',
                  }}>
                    Key Features
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    {project.features.map((feature, fi) => (
                      <motion.li
                        key={fi}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + fi * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{
                          minWidth: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: i === 0 ? 'var(--accent)' : 'var(--gold)',
                          marginTop: '8px',
                        }} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
