'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Code, Smartphone, Box, Server, Globe, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { projects } from '@/lib/data'
import { getProjectStatusColor } from '@/lib/utils'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web', label: 'Web Apps', icon: <Code className="w-4 h-4" /> },
    { id: 'fullstack', label: 'Full-Stack', icon: <Server className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ar-vr', label: 'AR/VR', icon: <Box className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Code className="w-5 h-5" />
      case 'fullstack': return <Server className="w-5 h-5" />
      case 'mobile': return <Smartphone className="w-5 h-5" />
      case 'ar-vr': return <Box className="w-5 h-5" />
      case 'backend': return <Server className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my work in full-stack development, AR/VR experiences, and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              leftIcon={category.icon}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              hover
            >
              {/* Project Image/Placeholder */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary-500 to-purple-600">
                {project.imageUrl ? (
                  <>
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300 z-10"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-50">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Project Title & Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-500">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      leftIcon={<Github className="w-4 h-4" />}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      leftIcon={<ExternalLink className="w-4 h-4" />}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card variant="glass" className="inline-block p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              I'm always working on new projects and exploring innovative technologies. 
              Let's discuss how we can work together!
            </p>
            <Button
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Projects