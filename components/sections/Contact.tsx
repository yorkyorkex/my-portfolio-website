'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { contactInfo, references } from '@/lib/data'
import { validateEmail, formatPhoneNumber } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: 'Send me an email'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: formatPhoneNumber(contactInfo.phone),
      href: `tel:${contactInfo.phone}`,
      description: 'Give me a call'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
      description: 'Based in Australia'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: contactInfo.linkedin,
      color: 'hover:text-blue-600'
    },
    ...(contactInfo.github ? [{
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: contactInfo.github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    }] : []),
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: `mailto:${contactInfo.email}`,
      color: 'hover:text-red-600'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <div style={{
              position: 'relative',
              display: 'inline-block',
              height: 'auto'
            }}>
              {/* 隱藏的佔位元素 */}
              <span style={{
                visibility: 'hidden',
                display: 'inline-block',
                paddingBottom: '8px'
              }} className="gradient-text text-4xl md:text-5xl font-bold">
                Get In Touch
              </span>
              
              {/* 實際顯示的動畫元素 */}
              <span className="gradient-text section-title-glow"
              style={{
                animationDelay: '1.5s'
              }}>
                Get In Touch
              </span>
            </div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities and challenges. Whether you're a company looking 
                  for a dedicated developer or someone with an exciting project idea, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const getContactType = (label: string) => {
                    switch (label.toLowerCase()) {
                      case 'email': return 'email';
                      case 'phone': return 'phone';
                      case 'location': return 'location';
                      default: return 'email';
                    }
                  };
                  
                  return (
                  <Card key={index} className={`card-contact-method ${getContactType(method.label)} p-4 transition-shadow`}>
                    <div className="flex items-center gap-4">
                      <div className="contact-icon w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {method.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                          {method.description}
                        </p>
                        {method.href !== '#' ? (
                          <a
                            href={method.href}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {method.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-dark-800 rounded-lg transition-colors ${link.color}`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Professional References
                </h4>
                <div className="space-y-3">
                  {references.slice(0, 2).map((ref, index) => (
                    <Card key={index} variant="bordered" className="card-reference p-4">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {ref.name}
                        </p>
                        <p className="text-primary-600 dark:text-primary-400 mb-1">
                          {ref.position} at {ref.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">
                          Available upon request
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-form p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Message
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.name
                            ? 'border-red-300 dark:border-red-600'
                            : 'border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.email
                            ? 'border-red-300 dark:border-red-600'
                            : 'border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.subject
                          ? 'border-red-300 dark:border-red-600'
                          : 'border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical ${
                        errors.message
                          ? 'border-red-300 dark:border-red-600'
                          : 'border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800'
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    leftIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact