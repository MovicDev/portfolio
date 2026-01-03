'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(23, 42, 57, 0.1)' }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 md:p-8 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl md:text-3xl font-bold transition-colors" style={{ color: '#172A39' }}>
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: '#FC563C' }}>
              Featured
            </span>
          )}
        </div>

        <p className="leading-relaxed text-base md:text-lg" style={{ color: '#6E7575' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#6E7575' }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium transition-colors"
              style={{ color: '#FC563C' }}
              whileHover={{ x: 5 }}
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium transition-colors hover:opacity-70"
              style={{ color: '#6E7575' }}
              whileHover={{ x: 5 }}
            >
              Code
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#172A39' }}>
            Projects
          </h2>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6E7575' }}>
            A selection of my recent work, showcasing expertise in web and
            mobile development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#172A39' }}>
              More Work
            </h3>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
