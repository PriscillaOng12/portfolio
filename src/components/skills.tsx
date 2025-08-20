'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Brain, Cloud } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  skills: Array<{
    name: string;
    description: string;
  }>;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Core Engineering',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', description: 'NumPy, Pandas, Pydantic' },
      { name: 'TypeScript', description: 'React, Next.js' },
      { name: 'C++', description: 'performance-critical systems' },
      { name: 'SQL', description: 'PostgreSQL' },
      { name: 'Java', description: 'enterprise patterns' },
      { name: 'C', description: 'systems programming foundations' }
    ]
  },
  {
    title: 'Frameworks & Architectures',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'FastAPI', description: 'high-performance APIs' },
      { name: 'Flask + WebSockets', description: 'real-time streaming' },
      { name: 'Next.js', description: 'server components, SSR' },
      { name: 'Apache Spark + Delta Lake', description: 'distributed data processing' },
      { name: 'Kafka / Redpanda', description: 'streaming pipelines' },
      { name: 'Django', description: 'ORM, REST backends' },
      { name: 'Celery / RQ', description: 'job orchestration' }
    ]
  },
  {
    title: 'AI / ML & Data Systems',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'PyTorch Serve', description: 'production ML inference' },
      { name: 'Adaptive Learning Engines', description: 'personalized difficulty adjustment' },
      { name: 'Anomaly Detection Systems', description: 'real-time symptom + data quality alerts' },
      { name: 'Monte Carlo Simulation', description: 'risk modeling, scenario testing' },
      { name: 'Leakage Sentinel', description: 'anti-overfitting guardrails in backtests' },
      { name: 'Hugging Face Transformers', description: 'LLM fine-tuning' },
      { name: 'scikit-learn', description: 'ML pipelines, feature engineering' }
    ]
  },
  {
    title: 'Cloud, DevOps & Tooling',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Docker', description: 'containerization' },
      { name: 'GCP Dataflow', description: 'ETL & stream processing' },
      { name: 'Helm', description: 'Kubernetes deployments' },
      { name: 'Prometheus + Grafana', description: 'metrics + visualization' },
      { name: 'OpenTelemetry', description: 'tracing & observability' },
      { name: 'Auth0', description: 'secure authentication' },
      { name: 'PostgreSQL', description: 'SQL + PL/pgSQL' },
      { name: 'Redis', description: 'caching, queues' }
    ]
  }
];

// Individual Skill Item Component
const SkillItem = ({ skill, categoryColor }: { skill: { name: string; description: string }; categoryColor: string }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -1 }}
    className="group bg-white/80 dark:bg-gray-700/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
          {skill.name}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          {skill.description}
        </p>
      </div>
      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColor} mt-1 ml-2 flex-shrink-0`} />
    </div>
  </motion.div>
);

// Category Card Component
const CategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const IconComponent = category.icon;
  
  // Get gradient background based on category
  const getGradientBg = (color: string) => {
    switch (color) {
      case 'from-blue-500 to-cyan-500':
        return 'from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700';
      case 'from-purple-500 to-pink-500':
        return 'from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700';
      case 'from-orange-500 to-red-500':
        return 'from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700';
      case 'from-green-500 to-teal-500':
        return 'from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700';
      case 'from-yellow-500 to-orange-500':
        return 'from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700';
      default:
        return 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${getGradientBg(category.color)} rounded-2xl p-6 h-full`}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
          <IconComponent size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
            {category.title}
          </h3>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-600/60 px-2 py-1 rounded-full">
          {category.skills.length}
        </span>
      </div>
      
      {/* Skills List */}
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.03) }}
            viewport={{ once: true }}
          >
            <SkillItem skill={skill} categoryColor={category.color} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Skills Component
export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Core technologies and specialized systems I use to build reliable, scalable solutions
          </p>
        </motion.div>

        {/* Skills Grid - 4 Cards in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}
