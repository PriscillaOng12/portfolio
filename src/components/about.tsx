'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, BookOpen, Heart, DollarSign, MessageSquare } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The story behind building products that matter
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* My Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Story & Mission</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                After beating a brain tumor during college, I experienced firsthand how broken healthcare technology really is. 
                That frustrating patient experience drove me to co-found MediSync—now piloting at 2 hospitals helping chronic-care patients stay on track.
              </p>
              <p>
                I'm passionate about turning messy, real-world problems into clean, elegant solutions. Whether it's building 
                high-performance trading systems at WorldQuant or researching AI bias at Dartmouth, I love diving deep into 
                complex challenges and emerging with something that actually works.
              </p>
              <p>
                Currently pursuing CS/Econ at Dartmouth (3.93 GPA) while building products that bridge the gap between 
                technical excellence and human impact.
              </p>
            </div>
          </motion.div>

          {/* Fun Facts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Dog Café Entrepreneur</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ran a pop-up dog café fundraiser for local shelters. Best customer: a Golden Retriever named Max who became a regular.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Trading Enthusiast</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Manage my own $65k trading portfolio while learning options strategies. Currently experimenting with systematic approaches.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Chronic Illness Advocate</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Give talks about resilience and innovation in healthcare. 4x speaking engagements (still get nervous every time).
              </p>
            </div>
          </motion.div>

          {/* Key Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Healthcare Innovator</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Brain tumor survivor turned healthcare innovator. Co-founded MediSync after experiencing medication management gaps firsthand.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Competitive Programs</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Bridgewater, Citadel, Jane Street INSIGHT programs. Dartmouth Honors Group (top 35%). Presidential Research Scholar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Quantitative Research</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                WorldQuant BRAIN Gold (top 10%), 15% portfolio return amplification. Building systematic trading strategies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}