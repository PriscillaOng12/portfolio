'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Target, Code2, FileText, X, Play, TrendingUp, Users, Zap, Database, Brain, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  oneLiner: string;
  category: 'Healthcare' | 'AI/ML' | 'FinTech' | 'Enterprise' | 'DevTools';
  topMetrics: string[];
  topTech: string[];
  techStack: TechItem[];
  image: string;
  featured: boolean;
  quickStats: {
    impact: string;
    tech: string;
    timeline: string;
  };
  links: {
    liveDemo?: string;
    github: string;
    productStrategy?: string;
    technicalDocs?: string;
  };
  fullDetails: {
    problemStatement: string;
    solution: string;
    results: string[];
    techHighlights: string[];
  };
}

interface TechItem {
  name: string;
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsUsed: number;
}

// Technology icons mapping (using simple-icons CDN)
const techIcons: Record<string, { icon: string; color: string }> = {
  'React': { icon: 'react', color: '#61DAFB' },
  'React Native': { icon: 'react', color: '#61DAFB' },
  'TypeScript': { icon: 'typescript', color: '#3178C6' },
  'JavaScript': { icon: 'javascript', color: '#F7DF1E' },
  'Python': { icon: 'python', color: '#3776AB' },
  'Node.js': { icon: 'nodedotjs', color: '#339933' },
  'C++': { icon: 'cplusplus', color: '#00599C' },
  'PostgreSQL': { icon: 'postgresql', color: '#4169E1' },
  'MongoDB': { icon: 'mongodb', color: '#47A248' },
  'Redis': { icon: 'redis', color: '#DC382D' },
  'Docker': { icon: 'docker', color: '#2496ED' },
  'Kubernetes': { icon: 'kubernetes', color: '#326CE5' },
  'AWS': { icon: 'amazonwebservices', color: '#FF9900' },
  'Firebase': { icon: 'firebase', color: '#FFCA28' },
  'OpenAI API': { icon: 'openai', color: '#412991' },
  'GPT-4': { icon: 'openai', color: '#412991' },
  'TensorFlow': { icon: 'tensorflow', color: '#FF6F00' },
  'PyTorch': { icon: 'pytorch', color: '#EE4C2C' },
  'NumPy': { icon: 'numpy', color: '#013243' },
  'Pandas': { icon: 'pandas', color: '#150458' },
  'Apache Spark': { icon: 'apachespark', color: '#E25A1C' },
  'Kafka': { icon: 'apachekafka', color: '#231F20' },
  'GitHub API': { icon: 'github', color: '#181717' },
  'Web Speech API': { icon: 'googlechrome', color: '#4285F4' },
  'Numba': { icon: 'python', color: '#3776AB' },
  'Next.js': { icon: 'nextdotjs', color: '#000000' },
  'Tailwind CSS': { icon: 'tailwindcss', color: '#06B6D4' },
  'Framer Motion': { icon: 'framer', color: '#0055FF' },
  'Vercel': { icon: 'vercel', color: '#000000' },
  'FHIR API': { icon: 'fastapi', color: '#009688' },
  'ML Pipeline': { icon: 'tensorflow', color: '#FF6F00' },
  'SIMD': { icon: 'cplusplus', color: '#00599C' },
  'Vector Embeddings': { icon: 'openai', color: '#412991' },
  'Real-time Speech API': { icon: 'googlechrome', color: '#4285F4' },
  'ESLint': { icon: 'eslint', color: '#4B32C3' },
  'SonarQube': { icon: 'sonarqube', color: '#4E9BCD' }
};

const projects: Project[] = [
  {
    id: 'aegis-health',
    title: 'Aegis Health — AI Symptom & Wearable Flare-Up Predictor',
    oneLiner: 'AI platform predicting 48-hour flare-ups for chronic pain patients using wearables and symptom logs',
    category: 'Healthcare',
    topMetrics: ['<200ms p95 latency', '+5-7% adherence (pilot, N=25)', '~150k snapshots'],
    topTech: ['FastAPI', 'PyTorch', 'React Native', 'Cloud Run', 'BigQuery'],
    techStack: [
      { name: 'FastAPI', icon: 'fastapi', level: 'expert', yearsUsed: 2 },
      { name: 'PyTorch', icon: 'pytorch', level: 'advanced', yearsUsed: 2 },
      { name: 'React Native', icon: 'react', level: 'expert', yearsUsed: 3 },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'advanced', yearsUsed: 3 },
      { name: 'Google Cloud', icon: 'googlecloud', level: 'intermediate', yearsUsed: 1 },
      { name: 'BigQuery', icon: 'googlebigquery', level: 'intermediate', yearsUsed: 1 }
    ],
    image: '/projects/aegis-health.jpg',
    featured: true,
    quickStats: {
      impact: 'Prevented "bad days" for chronic pain patients through calibrated predictions',
      tech: 'End-to-end AI platform with <200ms p95 API latency',
      timeline: '5 months (concept to pilot deployment)'
    },
    links: {
      liveDemo: 'https://aegis-health-demo.vercel.app',
      github: 'https://github.com/username/aegis-health',
      productStrategy: '/aegis-product-strategy',
      technicalDocs: '/aegis-technical-docs'
    },
    fullDetails: {
      problemStatement: 'Chronic pain patients lack timely, interpretable guidance for flare-up prevention. Clinicians need fast triage support. Current solutions are reactive rather than predictive.',
      solution: 'Built AI platform using wearable data + symptom logs to predict 48-hour flare-ups. Focuses on speed, interpretability, and user trust with real-time risk updates.',
      results: [
        '+5–7% adherence uplift vs control weeks (pilot, N=25)',
        '−8–10% false alerts through calibrated predictions',
        'p95 API latency <200ms with 70-80ms model inference',
        '99%+ crash-free rate across ~150k wearable snapshots'
      ],
      techHighlights: [
        'Two-service architecture on Cloud Run with event-driven ETL pipeline',
        'Per-user baseline drift handling and model calibration techniques',
        'Warm model instances with feature caching and msgpack serialization',
        'OpenTelemetry + Prometheus observability with canary deployments'
      ]
    }
  },
  {
    id: 'medisync',
    title: 'MediSync',
    oneLiner: 'Hospital medication compliance platform that increased adherence by 30%',
    category: 'Healthcare',
    topMetrics: ['30% adherence ↑', '2 hospital pilots'],
    topTech: ['React Native', 'Python', 'PostgreSQL', 'Firebase'],
    techStack: [
      { name: 'React Native', icon: 'react', level: 'expert', yearsUsed: 3 },
      { name: 'Python', icon: 'python', level: 'expert', yearsUsed: 4 },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'advanced', yearsUsed: 3 },
      { name: 'Firebase', icon: 'firebase', level: 'advanced', yearsUsed: 2 },
      { name: 'FHIR API', icon: 'fastapi', level: 'intermediate', yearsUsed: 1 },
      { name: 'ML Pipeline', icon: 'tensorflow', level: 'advanced', yearsUsed: 2 }
    ],
    image: '/projects/medisync-preview.jpg',
    featured: true,
    quickStats: {
      impact: '500+ patients helped, $1.2k ROI per patient',
      tech: 'React Native, ML Pipeline, FHIR API',
      timeline: '8 months (concept to pilot deployment)'
    },
    links: {
      liveDemo: 'https://medisync-demo.vercel.app',
      github: 'https://github.com/username/medisync',
      productStrategy: '/medisync-product-strategy',
      technicalDocs: '/medisync-technical-docs'
    },
    fullDetails: {
      problemStatement: 'Personal experience as brain tumor patient revealed critical gap: patients leave hospitals with complex medication schedules but no system to track adherence or catch errors. Healthcare providers spend 40% of time on medication-related issues.',
      solution: 'Built React Native app with predictive analytics, real-time notifications, and family caregiver integration. HIPAA-compliant with FHIR API for hospital system integration.',
      results: [
        '30% improvement in medication adherence across 150 beta users',
        'Reduced hospital readmissions by $1.2k per patient annually',
        '2 hospital pilot programs with 95% provider satisfaction',
        '99.9% notification delivery rate with custom retry logic'
      ],
      techHighlights: [
        'Built predictive ML model using patient behavior patterns—personalized timing increased adherence 18% over fixed schedules',
        'Implemented FHIR-compliant API reducing hospital onboarding from weeks to days',
        'Optimized for low-end Android devices—smooth performance on 3+ year old phones',
        'Designed offline-first architecture for patients with limited connectivity'
      ]
    }
  },
  {
    id: 'linguaai',
    title: 'LinguaAI',
    oneLiner: 'AI conversation partner that helped users gain 2.4x speaking confidence',
    category: 'AI/ML',
    topMetrics: ['2.4x confidence ↑', '68% retention'],
    topTech: ['React', 'OpenAI API', 'Web Speech API', 'MongoDB'],
    techStack: [
      { name: 'React', icon: 'react', level: 'expert', yearsUsed: 4 },
      { name: 'OpenAI API', icon: 'openai', level: 'advanced', yearsUsed: 2 },
      { name: 'Web Speech API', icon: 'googlechrome', level: 'intermediate', yearsUsed: 1 },
      { name: 'MongoDB', icon: 'mongodb', level: 'advanced', yearsUsed: 3 },
      { name: 'Vector Embeddings', icon: 'openai', level: 'intermediate', yearsUsed: 1 },
      { name: 'Node.js', icon: 'nodedotjs', level: 'expert', yearsUsed: 4 }
    ],
    image: '/projects/linguaai-preview.jpg',
    featured: true,
    quickStats: {
      impact: '89% of users had real conversations with natives',
      tech: 'GPT-4, Real-time Speech API, Vector Embeddings',
      timeline: '6 months (MVP to production)'
    },
    links: {
      liveDemo: 'https://linguaai.vercel.app',
      github: 'https://github.com/username/linguaai',
      productStrategy: '/linguaai-product-strategy'
    },
    fullDetails: {
      problemStatement: 'Could ace Spanish grammar tests but couldn\'t order coffee without panicking. This "confidence gap" between classroom learning and real conversation is universal—most learners hit a wall moving from lessons to speaking.',
      solution: 'AI conversation partner using GPT-4 with real-time speech processing. Remembers individual mistakes, adapts difficulty, and provides encouraging feedback before corrections.',
      results: [
        '2.4x improvement in speaking confidence (measured via surveys)',
        '68% retention at 4 weeks vs 8-12% industry average',
        '31 minutes average daily usage',
        '89% of users practiced with native speakers within 30 days'
      ],
      techHighlights: [
        'Real-time Web Speech API integration with custom error handling for accents',
        'Conversation memory system using vector embeddings to track progress',
        'Optimized GPT-4 prompts balancing encouragement with accuracy',
        'Efficient caching reduced OpenAI costs 40% without quality impact'
      ]
    }
  },
  {
    id: 'trading-platform',
    title: 'High-Performance Trading Platform',
    oneLiner: 'Order book simulator achieving 114K orders/sec with <1ms latency',
    category: 'FinTech',
    topMetrics: ['114K orders/sec', '9.4x faster'],
    topTech: ['C++', 'Python', 'Numba', 'Docker'],
    techStack: [
      { name: 'C++', icon: 'cplusplus', level: 'expert', yearsUsed: 5 },
      { name: 'Python', icon: 'python', level: 'expert', yearsUsed: 4 },
      { name: 'Numba', icon: 'python', level: 'advanced', yearsUsed: 2 },
      { name: 'Docker', icon: 'docker', level: 'advanced', yearsUsed: 3 },
      { name: 'SIMD', icon: 'cplusplus', level: 'advanced', yearsUsed: 2 },
      { name: 'NumPy', icon: 'numpy', level: 'expert', yearsUsed: 4 }
    ],
    image: '/projects/trading-preview.jpg',
    featured: true,
    quickStats: {
      impact: '15% portfolio return amplification at WorldQuant',
      tech: 'Single-threaded C++, Zero-copy operations, SIMD',
      timeline: '4 months (research to production)'
    },
    links: {
      github: 'https://github.com/username/trading-platform',
      technicalDocs: '/trading-platform-architecture'
    },
    fullDetails: {
      problemStatement: 'WorldQuant\'s backtesting infrastructure hit performance limits with complex strategies. 6-hour backtests created bottlenecks in strategy development, limiting researchers to 1-2 iterations per day.',
      solution: 'Built high-frequency trading simulator with single-threaded design, custom memory management, and mathematical model integration. Achieved sub-millisecond latency matching real market conditions.',
      results: [
        '9.4x faster than Zipline benchmark comparison',
        '114K orders/sec sustained throughput',
        '15% portfolio return amplification',
        '95% reduction in memory allocations'
      ],
      techHighlights: [
        'Single-threaded order book with zero-copy operations—deterministic execution',
        'Custom object pooling reduced allocations 95% in critical paths',
        'Cache-friendly data structures—85% reduction in cache misses',
        'SIMD vectorization of Black-Scholes/Avellaneda-Stoikov models—3x speedup'
      ]
    }
  },
  {
    id: 'data-platform',
    title: 'Data Quality Platform',
    oneLiner: 'Enterprise data processing platform handling 15TB+ daily with 97% accuracy',
    category: 'Enterprise',
    topMetrics: ['15TB+ daily', '97% accuracy'],
    topTech: ['Apache Spark', 'Redis', 'Kafka', 'PostgreSQL'],
    techStack: [
      { name: 'Apache Spark', icon: 'apachespark', level: 'expert', yearsUsed: 3 },
      { name: 'Redis', icon: 'redis', level: 'advanced', yearsUsed: 3 },
      { name: 'Kafka', icon: 'apachekafka', level: 'advanced', yearsUsed: 2 },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'expert', yearsUsed: 4 },
      { name: 'Python', icon: 'python', level: 'expert', yearsUsed: 4 },
      { name: 'Docker', icon: 'docker', level: 'advanced', yearsUsed: 3 }
    ],
    image: '/projects/data-platform-preview.jpg',
    featured: false,
    quickStats: {
      impact: '80% reduction in incident resolution time',
      tech: 'Multi-agent architecture, Real-time processing',
      timeline: '6 months (design to enterprise deployment)'
    },
    links: {
      github: 'https://github.com/username/data-platform'
    },
    fullDetails: {
      problemStatement: 'Data teams spending 60% of time debugging vs building, costing millions in revenue. Manual data quality checks couldn\'t scale with growing data volumes.',
      solution: 'Multi-agent data processing platform with real-time quality monitoring, automated error detection, and intelligent routing for different data types.',
      results: [
        '80% reduction in incident resolution time',
        '40% cost savings in data team operations',
        '97% accuracy in automated quality assessments',
        'Scaled to 15TB+ daily processing volume'
      ],
      techHighlights: [
        'Multi-agent architecture vs monolithic—better accuracy and specialization',
        'Real-time quality scoring using Apache Kafka streaming',
        'Automated anomaly detection reducing false positives by 60%',
        'Distributed processing with Apache Spark—linear scaling'
      ]
    }
  },
  {
    id: 'backtesting-engine',
    title: 'Backtesting Engine',
    oneLiner: 'Financial backtesting system 9.4x faster than industry standard',
    category: 'FinTech',
    topMetrics: ['9.4x faster', '4.3x less memory'],
    topTech: ['Python', 'Numba', 'NumPy', 'Pandas'],
    techStack: [
      { name: 'Python', icon: 'python', level: 'expert', yearsUsed: 4 },
      { name: 'Numba', icon: 'python', level: 'advanced', yearsUsed: 2 },
      { name: 'NumPy', icon: 'numpy', level: 'expert', yearsUsed: 4 },
      { name: 'Pandas', icon: 'pandas', level: 'expert', yearsUsed: 4 }
    ],
    image: '/projects/backtesting-preview.jpg',
    featured: false,
    quickStats: {
      impact: 'Reduced strategy testing time from hours to minutes',
      tech: 'Event-driven architecture, JIT compilation',
      timeline: '3 months (optimization focus)'
    },
    links: {
      github: 'https://github.com/username/backtesting-engine'
    },
    fullDetails: {
      problemStatement: 'Existing backtesting tools like Zipline were too slow for complex quantitative strategies. Researchers needed faster iteration cycles to test more hypotheses.',
      solution: 'Event-driven backtesting engine with Numba JIT compilation, vectorized operations, and optimized data structures for financial time series.',
      results: [
        '9.4x faster than Zipline benchmark',
        '4.3x less memory usage vs baseline',
        'Event-driven architecture with priority queues',
        'GARCH and Monte Carlo model integration'
      ],
      techHighlights: [
        'Numba JIT compilation for hot loops—10x speedup',
        'Vectorized operations using NumPy broadcasting',
        'Memory-mapped files for large datasets—reduced I/O bottlenecks',
        'Custom priority queue implementation for event ordering'
      ]
    }
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review Squad',
    oneLiner: 'Automated code review system with 85% actionable findings rate',
    category: 'DevTools',
    topMetrics: ['10x faster reviews', '85% actionable'],
    topTech: ['Python', 'OpenAI API', 'GitHub API', 'Docker'],
    techStack: [
      { name: 'Python', icon: 'python', level: 'expert', yearsUsed: 4 },
      { name: 'OpenAI API', icon: 'openai', level: 'advanced', yearsUsed: 2 },
      { name: 'GitHub API', icon: 'github', level: 'advanced', yearsUsed: 3 },
      { name: 'Docker', icon: 'docker', level: 'advanced', yearsUsed: 3 },
      { name: 'ESLint', icon: 'eslint', level: 'advanced', yearsUsed: 3 },
      { name: 'SonarQube', icon: 'sonarqube', level: 'intermediate', yearsUsed: 2 }
    ],
    image: '/projects/ai-review-preview.jpg',
    featured: false,
    quickStats: {
      impact: 'Reduced code review time from hours to minutes',
      tech: 'GPT-4, Static analysis, GitHub integration',
      timeline: '4 months (prototype to production)'
    },
    links: {
      github: 'https://github.com/username/ai-code-review',
      liveDemo: 'https://ai-code-review.vercel.app'
    },
    fullDetails: {
      problemStatement: 'Code reviews were bottlenecking development—senior developers spending 30% of time on reviews, with inconsistent quality and delayed feedback.',
      solution: 'AI-powered code review system using GPT-4 with static analysis integration. Provides context-aware suggestions, security vulnerability detection, and performance optimization recommendations.',
      results: [
        '10x faster review turnaround time',
        '85% of AI suggestions marked as actionable by developers',
        '40% reduction in bugs reaching production',
        'Freed up 12 hours/week of senior developer time'
      ],
      techHighlights: [
        'GPT-4 integration with custom prompts for code context understanding',
        'Static analysis pipeline combining ESLint, SonarQube, and custom rules',
        'GitHub webhook integration for real-time pull request analysis',
        'Caching layer reducing API costs by 60%'
      ]
    }
  }
];

const categoryConfig = {
  'Healthcare': { icon: Users, color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50 dark:bg-pink-900/20' },
  'AI/ML': { icon: Brain, color: 'from-purple-500 to-indigo-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  'FinTech': { icon: DollarSign, color: 'from-green-500 to-emerald-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  'Enterprise': { icon: Database, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  'DevTools': { icon: Zap, color: 'from-orange-500 to-red-500', bg: 'bg-orange-50 dark:bg-orange-900/20' }
};

// Tech Icon Component
const TechIcon = ({ tech, className = '' }: { tech: TechItem; className?: string }) => {
  const techConfig = techIcons[tech.name] || { icon: 'code', color: '#6B7280' };
  
  const getLevelColor = (level: TechItem['level']) => {
    switch (level) {
      case 'expert': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'advanced': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'beginner': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className={`group relative flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg ${className}`}>
      {/* Tech Logo - Using CSS for colored icons */}
      <div 
        className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg"
        style={{ backgroundColor: `${techConfig.color}20` }}
      >
        <div 
          className="w-6 h-6 rounded"
          style={{ backgroundColor: techConfig.color }}
        />
      </div>
      
      {/* Tech Name */}
      <span className="text-xs font-medium text-gray-900 dark:text-white text-center leading-tight">
        {tech.name}
      </span>
      
      {/* Level Indicator */}
      <div className="flex items-center gap-1 mt-1">
        <span className={`px-1.5 py-0.5 text-xs rounded-full font-medium ${getLevelColor(tech.level)}`}>
          {tech.level}
        </span>
      </div>
      
      {/* Years Used (on hover) */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {tech.yearsUsed} year{tech.yearsUsed !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

// Tech Grid Component
const TechGrid = ({ techStack }: { techStack: TechItem[] }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {techStack.map((tech, index) => (
        <TechIcon 
          key={`${tech.name}-${index}`}
          tech={tech}
          className="hover:scale-110 transition-transform"
        />
      ))}
    </div>
  );
};

// Project Preview Card Component
const ProjectPreviewCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const config = categoryConfig[project.category];
  const IconComponent = config.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Play className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Project Demo</span>
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 ${config.bg} text-xs font-medium rounded-full`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.oneLiner}
        </p>

        {/* Key Metrics */}
        <div className="flex gap-2 mb-4">
          {project.topMetrics.map((metric, idx) => (
            <span key={idx} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
              {metric}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="grid grid-cols-4 gap-2">
            {project.techStack.slice(0, 4).map((tech, idx) => {
              const techConfig = techIcons[tech.name] || { icon: 'code', color: '#6B7280' };
              return (
                <div key={idx} className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div 
                    className="w-6 h-6 mb-1 flex items-center justify-center rounded"
                    style={{ backgroundColor: `${techConfig.color}20` }}
                  >
                    <div 
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: techConfig.color }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                    {tech.name.length > 8 ? tech.name.substring(0, 8) + '...' : tech.name}
                  </span>
                </div>
              );
            })}
          </div>
          {project.techStack.length > 4 && (
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500">
                +{project.techStack.length - 4} more technologies
              </span>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

// Project Deep Dive Modal Component
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'problem' | 'results' | 'technical'>('problem');
  const config = categoryConfig[project.category];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 ${config.bg} text-sm font-medium rounded-full`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                {project.oneLiner}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Impact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.quickStats.impact}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Tech</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.quickStats.tech}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Timeline</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.quickStats.timeline}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-4">
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  Try Live Demo
                </a>
              )}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 pt-6">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('problem')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'problem'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Target size={16} />
                Problem & Solution
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'results'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <TrendingUp size={16} />
                Results & Impact
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'technical'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Code2 size={16} />
                Technical Details
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-6"
            >
              {activeTab === 'problem' && (
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Problem</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.fullDetails.problemStatement}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.fullDetails.solution}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-4">
                  {project.fullDetails.results.map((result, idx) => (
                    <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="space-y-6">
                  {/* Technology Stack */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
                    <TechGrid techStack={project.techStack} />
                  </div>
                  
                  {/* Technical Highlights */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technical Highlights</h4>
                    {project.fullDetails.techHighlights.map((highlight, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Documentation Links */}
          {(project.links.productStrategy || project.links.technicalDocs) && (
            <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Documentation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.links.productStrategy && (
                  <a href={project.links.productStrategy} className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                    <Target className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">Product Strategy</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">User research & decisions</div>
                    </div>
                  </a>
                )}
                {project.links.technicalDocs && (
                  <a href={project.links.technicalDocs} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">Technical Docs</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Architecture & implementation</div>
                    </div>
                  </a>
                )}
                <a href={project.links.github} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Full Documentation</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Complete README & setup</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Projects That Solve Real Problems
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Quick overview of what I've built across healthcare, AI, finance, and enterprise systems. 
            Click any project to dive deeper.
          </p>
        </motion.div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectPreviewCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}