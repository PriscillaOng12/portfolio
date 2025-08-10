'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Users, TrendingUp, Code2, Briefcase, Calendar, Star } from 'lucide-react';

type ViewMode = 'swe' | 'pm' | 'all';

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  category: 'swe' | 'pm' | 'both';
  live?: string;
  github?: string;
  details: {
    timeline: string;
    team?: string;
    impact: string[];
    metrics: {
      label: string;
      value: string;
      type: 'positive' | 'neutral';
    }[];
  };
  highlights: {
    swe: string[];
    pm: string[];
  };
}

const projects: Project[] = [
  {
    id: 'medisync',
    title: 'MediSync',
    description: 'Healthcare technology platform connecting patients with pharmacy partners to improve medication adherence through automated reminders, progress tracking, and provider integration.',
    shortDescription: 'Healthcare tech improving medication adherence',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'FHIR', 'Healthcare'],
    category: 'both',
    live: 'https://medisync.healthcare',
    github: 'https://github.com/priscillaong/medisync',
    details: {
      timeline: 'Jan 2024 - Present',
      team: '11-person cross-functional team',
      impact: [
        '30% improvement in medication adherence rates',
        '78% user retention rate after 3 months',
        '150+ beta users across 3 pharmacy partners',
        '$15,000 in initial funding secured'
      ],
      metrics: [
        { label: 'User Retention', value: '78%', type: 'positive' },
        { label: 'Adherence Improvement', value: '30%', type: 'positive' },
        { label: 'Active Users', value: '150+', type: 'positive' },
        { label: 'Funding Secured', value: '$15K', type: 'positive' }
      ]
    },
    highlights: {
      swe: [
        'Built microservices architecture with Node.js and Express',
        'Implemented FHIR-compliant API for healthcare data integration',
        'Designed real-time notification system with Redis and WebSocket',
        'Optimized database queries reducing load times by 60%'
      ],
      pm: [
        'Led user research with 42 patients and 12 healthcare providers',
        'Defined product roadmap and feature prioritization framework',
        'Managed go-to-market strategy and pharmacy partnership negotiations',
        'Established KPIs and analytics dashboard for business metrics'
      ]
    }
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review Squad',
    description: 'Multi-agent AI system that provides comprehensive code reviews using specialized agents for different aspects: security, performance, style, and logic. Built with distributed architecture for scalability.',
    shortDescription: 'Multi-agent AI code review system',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'Redis', 'GitHub API'],
    category: 'swe',
    live: 'https://ai-code-review.dev',
    github: 'https://github.com/priscillaong/ai-code-review-squad',
    details: {
      timeline: 'Mar 2024 - May 2024',
      impact: [
        '1,247 GitHub stars and 156 forks',
        '85% of suggestions marked as actionable by developers',
        '10x faster than manual code reviews',
        'Featured in GitHub trending repositories'
      ],
      metrics: [
        { label: 'GitHub Stars', value: '1,247', type: 'positive' },
        { label: 'Actionable Suggestions', value: '85%', type: 'positive' },
        { label: 'Speed Improvement', value: '10x', type: 'positive' },
        { label: 'Community Forks', value: '156', type: 'positive' }
      ]
    },
    highlights: {
      swe: [
        'Designed multi-agent architecture with specialized review agents',
        'Implemented circuit breaker pattern for API resilience',
        'Built comprehensive test suite with 95% code coverage',
        'Optimized async processing with Redis queue management'
      ],
      pm: [
        'Analyzed developer workflow pain points through surveys',
        'Created feature roadmap based on community feedback',
        'Managed open-source community engagement and contributions',
        'Defined success metrics and tracked adoption patterns'
      ]
    }
  },
  {
    id: 'trading-platform',
    title: 'High-Performance Trading Platform',
    description: 'Real-time trading platform built for WorldQuant with microsecond-level latency optimization, supporting complex quantitative strategies and risk management systems.',
    shortDescription: 'Real-time trading platform with microsecond latency',
    tags: ['C++', 'Python', 'Redis', 'WebSocket', 'Trading', 'Real-time'],
    category: 'swe',
    details: {
      timeline: 'Jun 2024 - Present',
      team: 'Quantitative Development Team',
      impact: [
        '9.4x improvement in order execution speed',
        '99.9% system uptime during trading hours',
        'Reduced latency to sub-100 microseconds',
        'Handles 10,000+ transactions per second'
      ],
      metrics: [
        { label: 'Speed Improvement', value: '9.4x', type: 'positive' },
        { label: 'System Uptime', value: '99.9%', type: 'positive' },
        { label: 'Latency', value: '<100μs', type: 'positive' },
        { label: 'Throughput', value: '10K TPS', type: 'positive' }
      ]
    },
    highlights: {
      swe: [
        'Optimized C++ code for sub-microsecond trade execution',
        'Implemented lock-free data structures for concurrent processing',
        'Built real-time risk management system with circuit breakers',
        'Designed memory-efficient order book management'
      ],
      pm: [
        'Collaborated with quants to define system requirements',
        'Prioritized features based on trading strategy needs',
        'Managed deployment timeline for critical trading periods',
        'Established monitoring and alerting frameworks'
      ]
    }
  }
];

export function ProjectsEnhanced() {
  const [filter, setFilter] = useState<ViewMode>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Load SWE/PM preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('viewMode') as ViewMode;
    if (savedMode && savedMode !== 'all') {
      setFilter(savedMode);
    }
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter || project.category === 'both';
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of products I've built from concept to deployment, demonstrating both technical depth and product strategy.
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {[
              { id: 'all', label: 'All Projects', icon: null },
              { id: 'swe', label: 'Engineering', icon: Code2 },
              { id: 'pm', label: 'Product', icon: Briefcase }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setFilter(id as ViewMode)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === id
                    ? id === 'swe'
                      ? 'bg-blue-600 text-white shadow-md'
                      : id === 'pm'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {Icon && <Icon size={18} />}
                {label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'swe'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : project.category === 'pm'
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-gray-300'
                  }`}>
                    {project.category === 'swe' && <Code2 size={12} />}
                    {project.category === 'pm' && <Briefcase size={12} />}
                    {project.category === 'both' && '💫'}
                    {project.category === 'swe' ? 'Engineering' : project.category === 'pm' ? 'Product' : 'Full-Stack'}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {project.details.timeline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.details.metrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <div className={`text-lg font-bold ${
                        metric.type === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 text-sm rounded-lg transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
                    )}
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    {selectedProject === project.id ? 'Less' : 'More'} Details
                  </motion.button>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="space-y-4">
                      {/* Full Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>

                      {/* All Metrics */}
                      <div className="grid grid-cols-2 gap-2">
                        {project.details.metrics.map((metric, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                            <div className={`text-sm font-bold ${
                              metric.type === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                            }`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Highlights based on current filter */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          {filter === 'swe' ? 'Technical Highlights' : filter === 'pm' ? 'Product Highlights' : 'Key Highlights'}
                        </h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          {(filter === 'swe' ? project.highlights.swe : 
                            filter === 'pm' ? project.highlights.pm : 
                            [...project.highlights.swe.slice(0, 2), ...project.highlights.pm.slice(0, 2)]
                           ).map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* All Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more detailed case studies?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I've documented the complete product development process, technical architecture decisions, and business impact for each project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/api/download-case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <ExternalLink size={18} />
                Download Case Studies
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 rounded-lg font-medium transition-all duration-200"
              >
                Let's Discuss Details
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
