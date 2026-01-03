import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with modern web technologies. Features include user authentication, payment integration, inventory management, and a responsive design that works seamlessly across all devices.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with a focus on performance and user experience.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    featured: true,
    githubUrl: 'https://github.com/movicdev/task-management-app',
    liveUrl: 'https://task-management-app-movicdev.vercel.app/',
  },
  {
    id: '3',
    title: 'Mobile Fitness Tracker',
    description:
      'A cross-platform mobile application for tracking workouts and fitness goals. Includes workout plans, progress tracking, and social sharing features.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, clean design, and optimized performance.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard application with location-based forecasts, interactive maps, and detailed weather analytics. Includes dark mode support.',
    technologies: ['Vue.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    description:
      'An analytics platform for social media metrics with real-time data visualization, customizable reports, and insights dashboard.',
    technologies: ['React', 'Node.js', 'Python', 'D3.js', 'PostgreSQL'],
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]
