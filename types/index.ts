export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'tools'
}
