'use client';

import 'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Clock, Target, Lightbulb, Search } from 'lucide-react';
import { useState } from 'react';

interface ProductStrategy {
  problemDiscovery: string;
  userResearch: string[];
  solutionStrategy: {
    mvpDecisions: string[];
    goToMarket: string[];
  };
  successMetrics: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
}om 'framer-motion';
import { ExternalLink, Github, Target, Code2, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  metrics: string[];
  techStack: string[];
  liveDemo?: string;
  github?: string;
  image: string;
  featured: boolean;
  productStrategy?: ProductStrategy;
  technicalHighlights?: string[];
}

interface ProductStrategy {
  problemDiscovery: string;
  userResearch: string[];
  solutionStrategy: {
    mvpDecisions: string[];
    goToMarket: string[];
  };
  successMetrics: {
    metric: string;
    value: string;
    description: string;
  }[];
}

const projects: Project[] = [
  {
    id: 'medisync',
    title: 'MediSync - Healthcare Platform',
    oneLiner: 'HIPAA-compliant medication adherence platform that turned my personal healthcare frustration into a solution now piloting at 2 hospitals.',
    description: 'Getting diagnosed with a brain tumor opened my eyes to how broken medication management really is. Missing doses, complex schedules, no way to track progress—it was a mess.',
    metrics: [
      '30% improvement in medication adherence',
      '2 hospital pilots successfully launched',
      '$5k initial funding raised',
      '150+ active users in pilot programs',
      '99.2% HIPAA compliance audit score'
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'AWS HIPAA', 'Socket.io', 'Twilio API', 'Chart.js', 'Jest'],
    github: 'https://github.com/PriscillaOng12',
    image: '/project-medisync.jpg',
    featured: true,
    productStrategy: {
      problemDiscovery: 'Personal experience as a brain tumor patient revealed how broken medication adherence really is. Missing doses, complex schedules, no way to track progress.',
      userResearch: [
        '40 user/clinician interviews across 6 months',
        'Identified top 3 pain points: forgetfulness, complex schedules, lack of progress tracking',
        'Market opportunity: $300B adherence problem globally'
      ],
      solutionStrategy: {
        mvpDecisions: [
          'Started with adaptive reminders only',
          'Said NO to symptom tracking initially',
          'Focused on post-discharge patients first'
        ],
        goToMarket: [
          'Hospital pilots to validate clinical workflow',
          'Modeled $1.2k/patient annual ROI',
          'Direct-to-consumer planned for Phase 2'
        ]
      },
      successMetrics: [
        { metric: '30%', value: 'Adherence improvement', description: 'vs baseline' },
        { metric: '2', value: 'Hospital pilots', description: 'actively running' },
        { metric: '150+', value: 'Active users', description: 'in pilot programs' }
      ]
    },
    technicalHighlights: [
      'Built custom HIPAA-compliant data encryption layer',
      'Implemented real-time medication reminders with Twilio',
      'Created adaptive scheduling algorithm based on user behavior',
      'Designed offline-first architecture for reliability'
    ]
  },
  {
    id: 'data-quality-platform',
    title: 'Intelligent Data Quality Monitoring Platform',
    oneLiner: 'Enterprise-grade distributed system that processes 15TB+ datasets with ML-powered anomaly detection—catching data issues that would cost companies $100k+ in lost revenue.',
    description: 'Built this after watching data science teams spend 60% of their time debugging data quality issues instead of building models. One corrupted batch could cascade through entire ML pipelines, causing millions in revenue impact.',
    metrics: [
      'Processes 15TB+ datasets in under 1 hour',
      '97.3% anomaly detection accuracy',
      '80% reduction in incident resolution time',
      '40% cost savings from resource optimization',
      'Supports 2500+ concurrent users'
    ],
    techStack: ['Apache Spark', 'Delta Lake', 'Kafka', 'FastAPI', 'React', 'Kubernetes', 'PostgreSQL', 'MLflow', 'Great Expectations'],
    github: 'https://github.com/PriscillaOng12',
    image: '/project-data-quality.jpg',
    featured: true
  },
  {
    id: 'order-book-simulator',
    title: 'Order Book Simulator',
    oneLiner: 'High-performance electronic trading system that handles 100K+ orders/second with sub-millisecond latency—simulating the core mechanics of NYSE and NASDAQ.',
    description: 'Built to understand how modern exchanges work and achieve the extreme performance required for electronic trading.',
    metrics: [
      '114K orders/second throughput',
      '<1ms latency (780μs 99th percentile)',
      '95% reduction in memory allocations via object pooling',
      '85% reduction in cache misses',
      '0.73% daily returns with 2.34 Sharpe ratio (market making bot)'
    ],
    techStack: ['Python', 'NumPy', 'Redis', 'WebSockets', 'Custom Memory Management', 'Mathematical Modeling'],
    github: 'https://github.com/PriscillaOng12',
    image: '/project-order-book.jpg',
    featured: true
  },
  {
    id: 'backtesting-engine',
    title: 'Backtesting Engine',
    oneLiner: 'Quantitative trading backtesting engine that\'s 9.4x faster than industry standards—processing 10K+ events/second with sophisticated risk management and statistical validation.',
    description: 'Existing backtesting tools are slow, memory-hungry, and lack statistical rigor. Quant strategies need fast iteration and robust testing to avoid overfitting.',
    metrics: [
      '10,247 events/second (vs 1,100 for Zipline)',
      '9.4x faster than industry standard',
      '4.3x less memory usage (487MB vs 2.1GB)',
      '<0.5ms strategy signal latency',
      '23 comprehensive tests with property-based testing'
    ],
    techStack: ['Python', 'Numba JIT', 'NumPy', 'PostgreSQL', 'GARCH Models', 'Monte Carlo Simulation', 'Pandas'],
    github: 'https://github.com/PriscillaOng12',
    image: '/project-backtesting.jpg',
    featured: true
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review Squad',
    oneLiner: 'Multi-agent system with 5 specialized AI reviewers (security, performance, logic, style, architecture) that catch bugs human reviewers miss—10x faster than traditional code reviews.',
    description: 'Code reviews are slow, subjective, and miss critical issues (especially security). Teams lose time to review backlogs and bugs that slip through.',
    metrics: [
      '10x faster reviews (15 minutes vs 2 hours)',
      '85% of findings marked actionable by developers',
      'Processes 100+ concurrent reviews',
      '~200ms average API response time',
      '90%+ test coverage'
    ],
    techStack: ['FastAPI', 'React', 'TypeScript', 'OpenAI GPT-4', 'Anthropic Claude', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/PriscillaOng12',
    image: '/project-ai-review.jpg',
    featured: false
  },
  {
    id: 'lingua-ai',
    title: 'LinguaAI - AI Language Learning Companion',
    oneLiner: 'AI conversation partner that adapts to your speaking level and remembers your mistakes—solving the gap between "doing Duolingo lessons" and "having real conversations."',
    description: 'Language learning apps treat all users the same way with static lessons. I could conjugate Spanish verbs perfectly but couldn\'t order coffee without panicking.',
    metrics: [
      '2.4x improvement in conversation confidence',
      '68% 4-week retention rate (vs 8-12% industry average)',
      '31 minutes average daily usage',
      '~350ms AI response times including GPT-4 processing',
      '99.7% uptime over 4 months'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'OpenAI GPT-4', 'Web Speech API', 'Socket.io', 'PostgreSQL', 'Vercel'],
    liveDemo: 'https://lingua-ai-demo.vercel.app',
    github: 'https://github.com/PriscillaOng12',
    image: '/project-lingua-ai.jpg',
    featured: false,
    productStrategy: {
      problemDiscovery: 'I could conjugate Spanish verbs perfectly but couldn\'t order coffee without panicking. The gap between lesson-based learning and real conversation confidence is huge.',
      userResearch: [
        '20+ interviews with language learners',
        'Identified the "confidence gap" between lessons and real conversations',
        'Users wanted practice without judgment, not more grammar drills'
      ],
      solutionStrategy: {
        mvpDecisions: [
          'Spanish-only launch to validate core hypothesis',
          'AI that remembers individual mistakes and patterns',
          'Progress visualization over gamification'
        ],
        goToMarket: [
          'Real-time voice processing (not server-side)',
          'Encouraging feedback first, corrections second',
          'Personalized conversations vs scripted dialogues'
        ]
      },
      successMetrics: [
        { metric: '2.4x', value: 'Confidence improvement', description: 'measured via surveys' },
        { metric: '68%', value: '4-week retention', description: 'vs 8-12% industry' },
        { metric: '31min', value: 'Daily usage', description: 'average session' }
      ]
    },
    technicalHighlights: [
      'Implemented real-time Web Speech API with custom error handling',
      'Built conversation memory system using vector embeddings',
      'Optimized GPT-4 prompts for encouraging yet corrective feedback',
      'Created adaptive difficulty algorithm based on user performance'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            High-impact technical solutions showcasing performance engineering, AI/ML, and real-world problem solving
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 p-8`}>
                {/* Project Image */}
                <div className={`${project.featured ? 'lg:order-2' : ''} relative group`}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                          <ExternalLink size={32} />
                        </div>
                        <p className="text-sm">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${project.featured ? 'lg:col-span-1 lg:order-1' : 'lg:col-span-2'} space-y-6`}>
                  <div>
                    {project.featured && (
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-3">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {project.oneLiner}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Metrics:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-colors"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
