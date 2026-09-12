import { motion, useReducedMotion } from 'framer-motion'

function useFadeIn(delay: number = 0) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return { initial: { opacity: 1, y: 0 }, whileInView: undefined, viewport: undefined, transition: undefined }
  }
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.4, ease: 'easeOut', delay }
  }
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  const anim = useFadeIn(0.02)
  return (
    <motion.h2 id={id} className="h2" {...anim}>
      {children}
    </motion.h2>
  )
}

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Nav() {
  return (
    <header className="site-header">
      <div className="wrap">
        <div className="brand">Ashwin</div>
        <nav aria-label="Primary">
          <ul className="nav">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Selected work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Identity() {
  const anim1 = useFadeIn(0.0)
  const anim2 = useFadeIn(0.05)
  const anim3 = useFadeIn(0.1)
  return (
    <section className="identity" aria-labelledby="identity-title">
      <div className="wrap">
        <motion.h1 id="identity-title" className="h1" {...anim1}>Ashwin Ramkumar</motion.h1>
        <motion.p className="role" {...anim2}>Forward Deployed AI Engineer at Intellect Design Arena Ltd</motion.p>
        <motion.p className="lead" {...anim3}>
          Product + engineering across multi‑cloud, DevSecOps, infra, and MLOps — a builder who ships.
        </motion.p>
        <ul className="links">
          <li><a href="https://github.com/ashwinr63" rel="me noopener" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ramkash/" rel="me noopener" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/ashramku" rel="me noopener" target="_blank">Twitter · @ashramku</a></li>
          <li className="muted">More: <a href="https://ashwinramkumar.netlify.app" rel="noopener" target="_blank">ashwinramkumar.netlify.app</a></li>
        </ul>
      </div>
    </section>
  )
}

function About() {
  const anim = useFadeIn(0.02)
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeading id="about-title">About</SectionHeading>
        <motion.p className="muted" {...anim}>
          I work hands‑on with product and engineering teams to ship AI‑powered systems end‑to‑end — from cloud
          infrastructure and DevSecOps to MLOps and application layers.
        </motion.p>
      </div>
    </section>
  )
}

function Experience() {
  const animH = useFadeIn(0.0)
  const anim = useFadeIn(0.06)
  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <SectionHeading id="exp-title">Experience</SectionHeading>
        <article className="experience-item">
          <header>
            <motion.h3 className="h3" {...animH}>Forward Deployed AI Engineer</motion.h3>
            <div className="meta">Intellect Design Arena Ltd</div>
          </header>
          <motion.p className="summary" {...anim}>
            Product/engineering across multi‑cloud, infrastructure as code, CI/CD, and MLOps to deliver AI features into production.
          </motion.p>
        </article>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    'Python','FastAPI','React','TypeScript','AWS','Docker','Terraform','GitLab CI/CD',
    'Redux','Firebase','Stripe','HuggingFace','FAISS'
  ]
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading id="skills-title">Skills & stack</SectionHeading>
        <ChipList items={skills} />
      </div>
    </section>
  )
}

type Project = {
  name: string
  description: string
  tags: string[]
  demo?: string
  repo: string
}

const projects: Project[] = [
  {
    name: 'ClothingStore',
    description: 'React/Redux e‑commerce with Firebase auth and Stripe checkout.',
    tags: ['React','Redux','Firebase','Stripe'],
    demo: 'https://legendary-phoenix-38d061.netlify.app/',
    repo: 'https://github.com/ashwinr63/ClothingStore'
  },
  {
    name: 'chatbot-crm-app',
    description: 'CRM support chatbot with semantic search using HuggingFace/FAISS.',
    tags: ['React','TypeScript','FastAPI','HuggingFace','FAISS'],
    repo: 'https://github.com/ashwinr63/chatbot-crm-app'
  },
  {
    name: 'ecomm_project_react',
    description: 'React storefront.',
    tags: ['React'],
    demo: 'https://ecomm-react-proj.netlify.app/',
    repo: 'https://github.com/ashwinr63/ecomm_project_react'
  }
]

function Projects() {
  const prefersReduced = useReducedMotion()
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading id="projects-title">Selected work</SectionHeading>
        <div className="projects">
          {projects.map((p, idx) => {
            const base = prefersReduced
              ? { initial: { opacity: 1, y: 0 } }
              : { initial: { opacity: 0, y: 16 } }
            return (
              <motion.article
                className="project"
                key={p.name}
                {...base}
                whileInView={!prefersReduced ? { opacity: 1, y: 0 } : undefined}
                viewport={!prefersReduced ? { once: true, margin: '-10% 0px' } : undefined}
                transition={!prefersReduced ? { duration: 0.35, delay: idx * 0.06 } : undefined}
              >
                <header className="project-head">
                  <h3 className="h3">{p.name}</h3>
                  <ul className="project-tags">
                    {p.tags.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </header>
                <p className="project-line">{p.description}</p>
                <p className="project-links">
                  {p.demo && (<><a href={p.demo} target="_blank" rel="noopener">Demo</a><span aria-hidden="true"> · </span></>)}
                  <a href={p.repo} target="_blank" rel="noopener">Repo</a>
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const anim = useFadeIn(0.02)
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHeading id="contact-title">Contact</SectionHeading>
        <motion.p className="muted" {...anim}>No email listed. Find me here:</motion.p>
        <ul className="links">
          <li><a href="https://github.com/ashwinr63" rel="me noopener" target="_blank">github.com/ashwinr63</a></li>
          <li><a href="https://www.linkedin.com/in/ramkash/" rel="me noopener" target="_blank">linkedin.com/in/ramkash</a></li>
          <li><a href="https://twitter.com/ashramku" rel="me noopener" target="_blank">twitter.com/ashramku</a></li>
        </ul>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#identity-title">Skip to content</a>
      <Nav />
      <main className="site-main">
        <Identity />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <small>© {new Date().getFullYear()} Ashwin Ramkumar</small>
        </div>
      </footer>
    </>
  )
}
