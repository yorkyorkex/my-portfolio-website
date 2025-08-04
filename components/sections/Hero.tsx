'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { contactInfo } from '@/lib/data'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              {/* Profile Image */}
              <div className="mb-8 animate-fade-in flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="/Persona.png"
                    alt="Hsiang-Jen Yu"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover shadow-2xl animate-float border-4 border-white dark:border-gray-700"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20"></div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="gradient-text">Hsiang-Jen Yu</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                  Full-Stack Developer & IT Professional
                </h2>
              </div>

              {/* Description */}
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  IT professional skilled in <span className="font-semibold text-primary-600 dark:text-primary-400">full-stack development</span>, 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> cloud systems</span>, and 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> technical support</span>. 
                  Known for adaptability and a proactive mindset, with a strong focus on delivering practical solutions.
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    leftIcon={<Mail className="w-5 h-5" />}
                    className="w-full sm:w-auto"
                  >
                    Get In Touch
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      // This would download the resume
                      window.open('/resume.pdf', '_blank')
                    }}
                    leftIcon={<Download className="w-5 h-5" />}
                    className="w-full sm:w-auto"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '1s' }}>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </a>
                  
                  {contactInfo.github && (
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors group"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    </a>
                  )}
                  
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors group"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - IT Picture */}
            <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Image
                  src="/IT picture.png"
                  alt="IT Professional Workspace"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500/10 to-purple-600/10"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Centered */}
          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero