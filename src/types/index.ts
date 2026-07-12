export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  icon: string
  gradient: string
  highlight?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
}

export interface TimelineEntry {
  date: string
  title: string
  organization: string
  location: string
  description: string[]
  type: 'work' | 'education' | 'certification'
}

export interface ContactFormData {
  from_name: string
  from_email: string
  subject: string
  message: string
}
