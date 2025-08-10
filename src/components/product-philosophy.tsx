'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, RefreshCw } from 'lucide-react';

export function ProductPhilosophy() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
            How I Think About Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My approach to building things that people actually want to use
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Start with the Problem
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              MediSync came from my own healthcare frustration. LinguaAI from struggling 
              to practice Spanish. The best products solve problems you've felt personally—
              or spent time understanding deeply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Measure What Matters
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Not just DAU/MAU, but actual outcomes. For MediSync: medication adherence rates. 
              For LinguaAI: conversation confidence scores. Vanity metrics don't help users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Iterate on Feedback
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Build fast, test with real users, and be willing to pivot. I've killed features 
              I loved because users didn't need them. The market is always right.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
