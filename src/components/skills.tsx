'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Brain, BarChart3, TrendingUp, Star, CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Learning';
  yearsUsed: string;
  projectsUsed?: string[];
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  skills: Skill[];
  color: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages I Think In',
    icon: Code2,
    description: 'The tools I reach for first when solving problems',
    skills: [
      { name: 'Python', level: 'Advanced', yearsUsed: '3+ years', projectsUsed: ['MediSync ML', 'Trading Algos'] },
      { name: 'JavaScript/TypeScript', level: 'Advanced', yearsUsed: '2+ years', projectsUsed: ['LinguaAI', 'This Site'] },
      { name: 'Java', level: 'Proficient', yearsUsed: '2 years', projectsUsed: ['Data Platform'] },
      { name: 'SQL', level: 'Advanced', yearsUsed: '3+ years', projectsUsed: ['WorldQuant Analytics'] },
      { name: 'C', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['Systems Programming'] },
      { name: 'R', level: 'Learning', yearsUsed: '6 months', projectsUsed: ['Financial Modeling'] }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frontend & Full-Stack',
    icon: Brain,
    description: 'Building user experiences that actually work',
    skills: [
      { name: 'React/Next.js', level: 'Advanced', yearsUsed: '2+ years', projectsUsed: ['LinguaAI', 'Portfolio'] },
      { name: 'Node.js', level: 'Proficient', yearsUsed: '1.5 years', projectsUsed: ['API Backends'] },
      { name: 'Django/FastAPI', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['MediSync Backend'] },
      { name: 'React Native', level: 'Learning', yearsUsed: '8 months', projectsUsed: ['MediSync Mobile'] },
      { name: 'Tailwind CSS', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['Recent Projects'] }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Data & Infrastructure',
    icon: Database,
    description: 'Making data work at scale (15TB+ daily at WorldQuant)',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', yearsUsed: '2+ years', projectsUsed: ['MediSync', 'Trading DB'] },
      { name: 'Apache Spark', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['WorldQuant Pipelines'] },
      { name: 'Redis', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['Caching Layers'] },
      { name: 'Docker/K8s', level: 'Learning', yearsUsed: '8 months', projectsUsed: ['Deployment'] },
      { name: 'AWS', level: 'Proficient', yearsUsed: '1.5 years', projectsUsed: ['Cloud Infrastructure'] }
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'From research papers to production models',
    skills: [
      { name: 'PyTorch', level: 'Advanced', yearsUsed: '2+ years', projectsUsed: ['Bias Research', 'MediSync ML'] },
      { name: 'OpenAI APIs', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['LinguaAI Conversations'] },
      { name: 'pandas/NumPy', level: 'Advanced', yearsUsed: '3+ years', projectsUsed: ['All Data Projects'] },
      { name: 'scikit-learn', level: 'Proficient', yearsUsed: '2 years', projectsUsed: ['Predictive Models'] },
      { name: 'Hugging Face', level: 'Learning', yearsUsed: '6 months', projectsUsed: ['LLM Fine-tuning'] }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Finance & Trading',
    icon: TrendingUp,
    description: 'Managing my own $65k portfolio while building quant strategies',
    skills: [
      { name: 'Options Trading', level: 'Learning', yearsUsed: '1 year', projectsUsed: ['Personal Portfolio'] },
      { name: 'Risk Management', level: 'Proficient', yearsUsed: '1.5 years', projectsUsed: ['WorldQuant Models'] },
      { name: 'Time Series Analysis', level: 'Proficient', yearsUsed: '1 year', projectsUsed: ['ARIMA/GARCH'] },
      { name: 'Statistical Modeling', level: 'Advanced', yearsUsed: '2+ years', projectsUsed: ['Research & Trading'] },
      { name: 'Bloomberg Terminal', level: 'Learning', yearsUsed: '6 months', projectsUsed: ['Market Data'] }
    ],
    color: 'from-yellow-500 to-orange-500'
  }
];

// Skill Level Component
const SkillLevelBadge = ({ level }: { level: 'Advanced' | 'Proficient' | 'Learning' }) => {
  const colors = {
    Advanced: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Proficient: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Learning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  };

  const icons = {
    Advanced: <Star size={12} className="mr-1" />,
    Proficient: <CheckCircle size={12} className="mr-1" />,
    Learning: <TrendingUp size={12} className="mr-1" />
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors[level]}`}>
      {icons[level]}
      {level}
    </span>
  );
};

// Individual Skill Component
const SkillCard = ({ skill, categoryColor }: { skill: Skill; categoryColor: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group/skill bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-500"
  >
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
      <SkillLevelBadge level={skill.level} />
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{skill.yearsUsed}</p>
    {skill.projectsUsed && skill.projectsUsed.length > 0 && (
      <div className="flex flex-wrap gap-1">
        {skill.projectsUsed.slice(0, 2).map((project, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-1 bg-gradient-to-r ${categoryColor} text-white rounded-full`}
          >
            {project}
          </span>
        ))}
        {skill.projectsUsed.length > 2 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{skill.projectsUsed.length - 2} more
          </span>
        )}
      </div>
    )}
  </motion.div>
);

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            What I Work With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I've used to solve real problems. Always learning, always building.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white`}>
                    {category.skills.length} skills
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <SkillCard skill={skill} categoryColor={category.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What I'm Learning Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I'm Learning Right Now
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The stuff I'm currently obsessing over (because there's always something new to figure out)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain size={24} className="text-blue-600 dark:text-blue-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Bias Research</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding how models fail in the real world</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={24} className="text-green-600 dark:text-green-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Options Strategies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Currently learning iron condors and covered calls</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 size={24} className="text-purple-600 dark:text-purple-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">PM Frameworks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Diving deep into product strategy and user research</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database size={24} className="text-orange-600 dark:text-orange-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Distributed Systems</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">How to make things work at WorldQuant scale</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
