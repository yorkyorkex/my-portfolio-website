'use client'

import { Heart, ArrowUp } from 'lucide-react'
import { contactInfo } from '@/lib/data'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text">
                  Hsiang-Jen Yu
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Full-Stack Developer & IT Professional
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Passionate about creating innovative solutions and delivering exceptional user experiences. 
                Always ready to take on new challenges and contribute to meaningful projects.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p className="mb-1">📍 {contactInfo.location}</p>
                <p className="mb-1">📧 {contactInfo.email}</p>
                <p>📱 {contactInfo.phone}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Interested in working together? I'm available for new opportunities and exciting projects.
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-block text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Send me an email →
                </a>
                <br />
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Connect on LinkedIn →
                </a>
                {contactInfo.github && (
                  <>
                    <br />
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      View my GitHub →
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Hsiang-Jen Yu. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Additional Footer Note */}
        <div className="text-center py-4 border-t border-gray-100 dark:border-dark-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            This portfolio showcases my professional journey and technical capabilities. 
            Built with modern web technologies and best practices for optimal performance and accessibility.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer