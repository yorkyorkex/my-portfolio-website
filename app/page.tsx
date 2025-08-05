'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Scroll to Hero section on page load/reload
    const scrollToHome = () => {
      const homeElement = document.getElementById('home')
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Small delay to ensure the page has rendered
    const timeoutId = setTimeout(scrollToHome, 100)
    
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}