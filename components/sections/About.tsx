'use client'

import { useState } from 'react'
import { GraduationCap, Award, Code2, Globe, Users, Zap } from 'lucide-react'
import Card from '@/components/ui/Card'
import { skills, education, awards } from '@/lib/data'
import { getSkillColor } from '@/lib/utils'

const About = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'education' | 'awards'>('overview')

  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: 'Years of Experience', value: '4+' },
    { icon: <Globe className="w-6 h-6" />, label: 'Projects Completed', value: '15+' },
    { icon: <Users className="w-6 h-6" />, label: 'Happy Clients', value: '10+' },
    { icon: <Zap className="w-6 h-6" />, label: 'Technologies', value: '60+' }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Users className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'awards', label: 'Awards', icon: <Award className="w-4 h-4" /> }
  ]

  const skillCategories = [
    { key: 'frontend', label: 'Frontend', skills: skills.filter(s => s.category === 'frontend') },
    { key: 'backend', label: 'Backend', skills: skills.filter(s => s.category === 'backend') },
    { key: 'cloud', label: 'Cloud & DevOps', skills: skills.filter(s => s.category === 'cloud') },
    { key: 'tools', label: 'Tools', skills: skills.filter(s => s.category === 'tools') },
    { key: 'soft', label: 'Soft Skills', skills: skills.filter(s => s.category === 'soft') }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} variant="glass" className="text-center p-6 hover:scale-105 transition-transform">
              <div className="text-primary-600 dark:text-primary-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-dark-800 rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Professional Journey</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a dedicated IT professional with a strong foundation in full-stack development, 
                    cloud systems, and technical support. My journey began with a Bachelor's degree in 
                    Information Management, where I achieved a perfect 4.0 GPA.
                  </p>
                  <p>
                    Currently pursuing a Master of Information Technology at Queensland University of Technology 
                    with a GPA of 6.107/7.0, I've been recognized with multiple academic excellence awards 
                    and have won the Best Research Paper Award.
                  </p>
                  <p>
                    My experience spans from software development at Braiv Tech to AR/VR development at 
                    Imagine Realities, always focusing on creating practical solutions that make a real impact.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Drives Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Always exploring new technologies and methodologies to solve complex problems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Collaboration</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Strong believer in teamwork and cross-functional collaboration for success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Impact</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Focused on creating solutions that make a meaningful difference.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <Card key={category.key} className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {category.label}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {category.skills.map((skill) => (
                      <Card
                        key={skill.name}
                        variant="glass"
                        hover
                        className="p-4 flex flex-col items-center justify-center text-center min-h-[120px] group cursor-pointer"
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                          {skill.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Level {skill.level}/5
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {edu.institution} • {edu.location}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          GPA: <span className="font-semibold">{edu.gpa}</span>
                        </p>
                      )}
                      {edu.achievements && (
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                            {edu.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.coursework && (
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="space-y-6">
              {awards.map((award) => (
                <Card key={award.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {award.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {award.date}
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {award.organization} • {award.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About