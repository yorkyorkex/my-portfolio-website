'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { contactInfo } from '@/lib/data'

const titles = [
  'Full-Stack Developer',
  'IT Professional', 
  'Cloud Systems Expert',
  'Problem Solver'
]

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentTitle, setCurrentTitle] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [nameAnimated, setNameAnimated] = useState(false)
  const [wordsAnimated, setWordsAnimated] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Start name animation immediately after mount
    setTimeout(() => setNameAnimated(true), 100)
    // Start description animation
    setTimeout(() => setWordsAnimated(true), 800)
  }, [])

  // Character-by-character typing animation for job titles
  useEffect(() => {
    if (!mounted) return

    let timeouts: NodeJS.Timeout[] = []

    const typeTitle = () => {
      const title = titles[currentTitleIndex]
      setCurrentTitle('')
      setIsTyping(true)
      
      // Clear any existing timeouts
      timeouts.forEach(clearTimeout)
      timeouts = []
      
      // Type each character
      for (let i = 0; i <= title.length; i++) {
        const timeout = setTimeout(() => {
          setCurrentTitle(title.substring(0, i))
          if (i === title.length) {
            setIsTyping(false)
            // Wait before deleting
            const deleteTimeout = setTimeout(() => {
              // Delete each character
              for (let j = title.length; j >= 0; j--) {
                const delTimeout = setTimeout(() => {
                  setCurrentTitle(title.substring(0, j))
                  if (j === 0) {
                    // Move to next title
                    const switchTimeout = setTimeout(() => {
                      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
                    }, 300)
                    timeouts.push(switchTimeout)
                  }
                }, (title.length - j) * 50)
                timeouts.push(delTimeout)
              }
            }, 2500)
            timeouts.push(deleteTimeout)
          }
        }, i * 100)
        timeouts.push(timeout)
      }
    }

    // Start typing animation after initial delay
    const startTimeout = setTimeout(() => {
      typeTitle()
    }, 1200)
    timeouts.push(startTimeout)

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [currentTitleIndex, mounted])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-14">
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
              {/* Profile Image with Enhanced Glow */}
              <div className="mb-12 lg:mb-16 animate-fade-in flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Outer glow rings */}
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary-400/20 via-purple-500/30 to-blue-500/20 blur-3xl animate-avatar-glow opacity-60 group-hover:opacity-90 transition-opacity duration-1000"></div>
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary-300/25 via-purple-400/35 to-blue-400/25 blur-2xl animate-avatar-glow-secondary opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-200/30 via-purple-300/40 to-blue-300/30 blur-xl animate-avatar-glow-tertiary opacity-40 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  
                  {/* Main avatar container */}
                  <div className="relative">
                    <Image
                      src="/Persona.png"
                      alt="Hsiang-Jen Yu"
                      width={180}
                      height={180}
                      className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl animate-float border-4 border-white dark:border-gray-700 relative z-10 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20 animate-pulse opacity-60"></div>
                    
                    {/* Rotating halo effect */}
                    <div className="absolute -inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-400 via-purple-500 to-blue-500 animate-spin-slow opacity-30 group-hover:opacity-60 transition-opacity duration-700" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute -inset-1 rounded-full border border-transparent bg-gradient-to-r from-blue-400 via-primary-500 to-purple-500 animate-spin-slow opacity-20 group-hover:opacity-50 transition-opacity duration-700" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                    
                    {/* Pulsing light particles around avatar */}
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary-400 rounded-full animate-orbit-slow opacity-70"></div>
                    <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-orbit-medium opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-orbit-slow opacity-50" style={{ animationDelay: '4s' }}></div>
                    <div className="absolute top-3/4 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-orbit-medium opacity-65" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-6" style={{ 
                animation: 'slide-up 0.8s ease-out',
                animationDelay: '0.2s',
                animationFillMode: 'both'
              }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <div className={`${
                    nameAnimated 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                  style={{
                    transition: 'opacity 1000ms ease-in-out',
                    display: 'inline-block',
                    position: 'relative'
                  }}>
                    <span className="gradient-text name-glow-subtle"
                    style={{
                      display: 'inline-block',
                      paddingBottom: '8px',
                      position: 'relative'
                    }}>
                      Hsiang-Jen Yu
                    </span>
                  </div>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium min-h-[3rem] flex items-center justify-center lg:justify-start">
                  <div className="relative">
                    <span className="inline-block font-mono whitespace-nowrap">
                      {currentTitle}
                      <span className={`inline-block animate-blink ml-1 text-primary-500 ${
                        isTyping || currentTitle.length > 0 ? 'opacity-100' : 'opacity-0'
                      }`}>|</span>
                    </span>
                  </div>
                </h2>
              </div>

              {/* Description */}
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {[
                    'IT', 'professional', 'skilled', 'in', 
                    { text: 'full-stack', isHighlight: true }, 
                    { text: 'development', isHighlight: true }, ',',
                    { text: 'cloud', isHighlight: true },
                    { text: 'systems', isHighlight: true }, ',', 'and',
                    { text: 'technical', isHighlight: true },
                    { text: 'support', isHighlight: true }, '.', 'Known', 'for', 'adaptability', 'and', 'a', 'proactive', 'mindset,', 'with', 'a', 'strong', 'focus', 'on', 'delivering', 'practical', 'solutions.'
                  ].map((word, index) => {
                    const isWordObject = typeof word === 'object'
                    const wordText = isWordObject ? word.text : word
                    const isHighlight = isWordObject ? word.isHighlight : false
                    
                    return (
                      <span
                        key={index}
                        className={`inline-block transition-all duration-500 mr-1 ${
                          wordsAnimated
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-2'
                        } ${
                          isHighlight 
                            ? 'font-semibold text-primary-600 dark:text-primary-400 animate-keyword-glow' 
                            : ''
                        }`}
                        style={{
                          transitionDelay: `${index * 0.05}s`
                        }}
                      >
                        {wordText}
                      </span>
                    )
                  })}
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
            <div className="hidden lg:block animate-slide-up animate-float-gentle" style={{ animationDelay: '0.4s' }}>
              <div className="relative group">
                {/* Glowing aura layers */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-primary-400/20 via-purple-500/20 to-blue-500/20 blur-2xl animate-glow-pulse opacity-60 group-hover:opacity-90 transition-opacity duration-1000"></div>
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-300/25 via-purple-400/25 to-blue-400/25 blur-xl animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary-200/30 via-purple-300/30 to-blue-300/30 blur-lg animate-glow-pulse opacity-40 group-hover:opacity-70 transition-opacity duration-1000" style={{ animationDelay: '1s' }}></div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                  <Image
                    src="/IT picture.png"
                    alt="IT Professional Workspace"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Animated gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-purple-600/10 transition-opacity duration-700 group-hover:opacity-25"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/8 via-transparent to-cyan-500/8 animate-pulse opacity-40"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
                  
                  {/* Enhanced floating light particles effect */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-particle-float opacity-70" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-particle-float opacity-60" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-particle-float opacity-50" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-particle-float opacity-65" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-emerald-400 rounded-full animate-particle-float opacity-55" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-particle-float opacity-50" style={{ animationDelay: '2.5s' }}></div>
                  
                  {/* Enhanced border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-primary-400/40 via-purple-400/40 to-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Pulsing corner lights */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-primary-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-cyan-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.9s' }}></div>
                </div>
                
                {/* Enhanced breathing animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/3 to-transparent animate-pulse opacity-30" style={{ animationDuration: '5s' }}></div>
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