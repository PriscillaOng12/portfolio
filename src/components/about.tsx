'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, BookOpen, Heart, DollarSign, MessageSquare, HeartPulse, Activity, TrendingUp as ChartLine, Coffee, Award, Lightbulb } from 'lucide-react';

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
            The story behind building products that matter — and the curiosity that fuels it.
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
                I build products at the edge of human need and technical possibility. After navigating a brain tumor, I co‑founded <a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Aegis Health</a> to give patients interpretable, timely guidance; now I research AI bias at Dartmouth and explore systematic trading—different domains, same goal: decisions that are smarter and kinder.
              </p>
            </div>
          </motion.div>

          {/* First Row: Identity Cards */}
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
                  <HeartPulse className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Chronic Illness Advocate</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p>• Talks on patient‑centered care and innovation for chronic illness (4x speaker but still gets nervous).</p>
                <p>• Built a support community linking patients, clinicians, and builders.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Healthcare Innovator</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p>• Co‑founded Aegis Health: calibrated, explainable 48‑hour risk.</p>
                <p>• Designed with inputs from clinicians and beta-tested at 2 hospitals with a focus on safety and accessibility.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <ChartLine className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Financial Market Enthusiast</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p>• Curious about how incentives and microstructure shape price.</p>
                <p>• Love framing the world with data, risk limits, and system design.</p>
              </div>
            </div>
          </motion.div>

          {/* Second Row: Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Entrepreneur</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p>• Owner of a pop‑up dog café fundraiser for shelters.</p>
                <p>• Chief Tasting Office (CTO): My ultra‑spoiled chow chow.</p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Fun Facts</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span>🐶</span>
                  <span>Professional dog treats bake (yes it's a thing)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎤</span>
                  <span>Occasional sit-down comedian (I might just have made you laughed)</span>
                </div>
              </div>
            </div>

            {/* Fellowships & Hackathons */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Fellowships & Hackathons</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>• Bridgewater Immersion</p>
                <p>• Citadel Fixed Income and Macro Challenge</p>
                <p>• Citadel Women's Datathon</p>
                <p>• Jane Street INSIGHT</p>
                <p>• Cornell Tech AI/ML Fellow</p>
              </div>
            </div>
          </motion.div>

          {/* What I'm Learning Now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          >
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Mitigating social bias in LLMs by pruning attention heads in transformer models</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={24} className="text-green-600 dark:text-green-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Options & Market Structure</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding market microstructure—intuition first, then data and simple sims</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb size={24} className="text-purple-600 dark:text-purple-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Product Discovery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sharper product discovery & prioritization with faster, ethical iterations</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Activity size={24} className="text-orange-600 dark:text-orange-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Distributed Systems</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building for reliability at scale with queues, backpressure, and observability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
