'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Activity, TrendingUp, Coffee, RotateCcw, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

// Story variants for A/B testing
const STORY_VARIANTS = [
  "I build products at the edge of human need and technical possibility. After navigating a brain tumor, I co‑founded Aegis Health to give patients interpretable, timely guidance; now I research AI bias at Dartmouth and explore systematic trading—different domains, same goal: decisions that are smarter and kinder.",
  "I'm a brain tumor survivor who turned a frustrating patient experience into Aegis Health—an AI platform piloting at two hospitals to help chronic‑care patients stay on track. At Dartmouth I study how to reduce bias in language models and I love tackling hard problems with rigor and empathy, from patient journeys to market microstructure.",
  "My work sits where systems meet people. A patient journey led me to Aegis Health (piloting at two hospitals), research on bias in LLMs, and curiosity about markets. Whether shipping code or shaping product, I break messy problems into hypotheses, experiments, and results.",
  "I've learned to lead and to listen. That's how Aegis Health moved from interviews to a live pilot, how our research asks better questions about AI bias, and how trading taught me to separate process from outcome. I bring calm urgency, clear communication, and a bias to ship.",
  "I'm obsessed with how information becomes decisions: a risk card a patient trusts, a model we can explain, a market signal that's more than noise. That curiosity started as a patient, became Aegis Health, and now anchors my work in ML, product thinking, and markets."
];

const IDENTITY_CARDS = [
  {
    icon: HeartPulse,
    title: "Chronic Illness Advocate",
    lines: [
      "Talks on patient‑centered care and innovation for chronic illness (4x speaker but still gets nervous).",
      "Built a support community linking patients, clinicians, and builders."
    ]
  },
  {
    icon: Activity,
    title: "Healthcare Innovator",
    lines: [
      "Co‑founded Aegis Health: calibrated, explainable 48‑hour risk.",
      "Designed with inputs from clinicians and beta-tested at 2 hospitals with a focus on safety and accessibility."
    ]
  },
  {
    icon: TrendingUp,
    title: "Trading Enthusiast",
    lines: [
      "Curious about how incentives and microstructure shape price.",
      "Love framing the world with data, risk limits, and system design."
    ]
  },
  {
    icon: Coffee,
    title: "Entrepreneur",
    lines: [
      "Owner of a pop‑up dog café fundraiser for shelters.",
      "Chief Tasting Office (CTO): My ultra‑spoiled chow chow."
    ]
  }
];

const CURRENTLY_LEARNING = [
  "Mitigating social bias in LLMs by pruning attention heads in transformer models and testing careful trade‑offs.",
  "Sharper product discovery & prioritization with faster, ethical iterations.",
  "Options & market microstructure—intuition first, then data and simple sims.",
  "Distributed systems for reliability at small scale (queues, backpressure, o11y)."
];

const FELLOWSHIPS_TEXT = "Bridgewater Immersion, Citadel Fixed Income and Macro Challenge, Citadel Women's Datathon, Jane Street INSIGHT, AI/ML at Cornell Tech";

const FUN_FACTS = [
  { emoji: "🐶", text: "Professional dog treats baker", detail: "Yes, my chow chow is the quality control department." },
  { emoji: "🎤", text: "Occasional sit-down comedian", detail: "I tell jokes about debugging code and hospital Wi-Fi." }
];

export function About() {
  const [selectedStory, setSelectedStory] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activePopover, setActivePopover] = useState<number | null>(null);

  // Load story preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('about-story-variant');
    if (saved && parseInt(saved) < STORY_VARIANTS.length) {
      setSelectedStory(parseInt(saved));
    }
  }, []);

  const cycleStory = () => {
    const next = (selectedStory + 1) % STORY_VARIANTS.length;
    setSelectedStory(next);
    localStorage.setItem('about-story-variant', next.toString());
  };

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
            A crisp elevator pitch + quick-read identity
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Story + Identity Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* My Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Story</h3>
                <button
                  onClick={cycleStory}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Swap story version"
                  title="Click to see different perspective"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
              <motion.p
                key={selectedStory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-[68ch]"
              >
                {STORY_VARIANTS[selectedStory]}
              </motion.p>
            </motion.div>

            {/* Identity Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {IDENTITY_CARDS.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                    onMouseEnter={() => setExpandedCard(index)}
                    onMouseLeave={() => setExpandedCard(null)}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCard === index}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedCard(expandedCard === index ? null : index);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {card.title}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {card.lines[0]}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedCard === index ? 'auto' : 0,
                          opacity: expandedCard === index ? 1 : 0
                        }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {card.lines[1]}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Currently Learning + Fun Facts + Fellowships */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-20 space-y-6">
              {/* Currently Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Currently Learning</h4>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                  {CURRENTLY_LEARNING.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm leading-tight border border-blue-100 dark:border-blue-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Fun Facts</h4>
                <div className="grid grid-cols-1 gap-3">
                  {FUN_FACTS.map((fact, index) => (
                    <div key={index} className="relative">
                      <button
                        className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        onClick={() => setActivePopover(activePopover === index ? null : index)}
                        aria-expanded={activePopover === index}
                      >
                        <span className="text-lg">{fact.emoji}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white flex-1">
                          {fact.text}
                        </span>
                        <Info size={14} className="text-gray-400" />
                      </button>
                      {activePopover === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 p-3 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg z-10"
                        >
                          {fact.detail}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fellowships */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Fellowships & Programs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {FELLOWSHIPS_TEXT}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}