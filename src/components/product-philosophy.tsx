'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, Eye, Users, Building } from 'lucide-react';

const principles = [
  {
    title: "Start with Real Problems",
    content: "Great products solve high-impact problems users actually face. Every project I build starts with immersive research — talking to users, mapping pain points, and validating the problem before writing a line of code.",
    icon: Search,
    color: "blue"
  },
  {
    title: "Focus on Measurable Impact",
    content: "I define success in outcomes, not outputs. Whether it's improving patient adherence rates or reducing review turnaround times, I track metrics that matter to the business and to the user.",
    icon: BarChart3,
    color: "green"
  },
  {
    title: "Iterate with Purpose",
    content: "I believe in rapid prototyping, testing with real users, and letting feedback shape the roadmap. I've shipped MVPs in weeks, pivoted when the data demanded it, and retired features that didn't serve the end goal.",
    icon: Eye,
    color: "purple"
  },
  {
    title: "Collaborate Across Functions",
    content: "From engineers to designers to stakeholders, I work closely with diverse teams to ensure alignment. Clear communication and shared goals are as critical to shipping great products as the code itself.",
    icon: Users,
    color: "orange"
  },
  {
    title: "Balance Vision with Execution",
    content: "I'm comfortable zooming out to define a long-term product vision — and zooming in to debug a technical blocker. Recruiters can trust I'll bridge the gap between strategy and shipping.",
    icon: Building,
    color: "teal"
  }
];

const colorMap = {
  blue: "bg-blue-500",
  green: "bg-green-500", 
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500"
};

export function ProductPrinciples() {
  return (
    <section 
      id="product-thinking" 
      aria-labelledby="product-thinking-title"
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="product-thinking-title"
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent"
          >
            How I Think About Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[68ch] mx-auto">
            My approach to building things that people actually want to use
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top Row: First 3 principles */}
          {principles.slice(0, 3).map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="article"
                tabIndex={0}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700
                  transition-all duration-150 ease-in-out cursor-pointer
                  hover:shadow-lg hover:-translate-y-1
                  focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                  motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colorMap[principle.color as keyof typeof colorMap]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent 
                      className="w-6 h-6 text-white" 
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {principle.content}
                </p>
              </motion.article>
            );
          })}
          
          {/* Bottom Row: Last 2 principles, centered */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {principles.slice(3).map((principle, index) => {
                const IconComponent = principle.icon;
                const actualIndex = index + 3; // Adjust delay for animation
                return (
                  <motion.article
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: actualIndex * 0.1 }}
                    viewport={{ once: true }}
                    role="article"
                    tabIndex={0}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700
                      transition-all duration-150 ease-in-out cursor-pointer
                      hover:shadow-lg hover:-translate-y-1
                      focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                      motion-reduce:transition-none motion-reduce:hover:transform-none"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${colorMap[principle.color as keyof typeof colorMap]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent 
                          className="w-6 h-6 text-white" 
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {principle.content}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
