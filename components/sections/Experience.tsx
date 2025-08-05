'use client'

import { useState } from 'react'
import { Briefcase, MapPin, Calendar, ChevronRight, Trophy } from 'lucide-react'
import Card from '@/components/ui/Card'
import { experiences, volunteerWork } from '@/lib/data'

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'volunteer'>('professional')
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  return (
    <section id="experience" className="py-20">
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
                Experience
              </span>
              
              {/* 實際顯示的動畫元素 */}
              <span className="gradient-text section-title-glow"
              style={{
                display: 'inline-block',
                paddingBottom: '8px',
                whiteSpace: 'nowrap',
                animationDelay: '0.5s'
              }}>
                Experience
              </span>
            </div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey across software development, technical support, and innovative projects
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-dark-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'professional'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Professional
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'volunteer'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Volunteer
            </button>
          </div>
        </div>

        {/* Professional Experience */}
        {activeTab === 'professional' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-white dark:bg-dark-800 border-4 border-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 text-primary-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.position}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.description.slice(0, expandedExperience === exp.id ? undefined : 2).map((desc, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {exp.description.length > 2 && (
                            <button
                              onClick={() => toggleExpanded(exp.id)}
                              className="mt-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                            >
                              {expandedExperience === exp.id ? 'Show Less' : `Show ${exp.description.length - 2} More`}
                            </button>
                          )}
                        </div>

                        {/* Technologies */}
                        {exp.technologies && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        {exp.achievements && expandedExperience === exp.id && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                  <Trophy className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-1" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Volunteer Experience */}
        {activeTab === 'volunteer' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {volunteerWork.map((vol) => (
                <Card key={vol.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {vol.role}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            {vol.organization}
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{vol.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{vol.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {vol.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience