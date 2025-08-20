'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Target, Code2, FileText, X, Play, TrendingUp, Users, Zap, Database, Brain, DollarSign } from 'lucide-react';

// Type definitions
interface Project {
  key: string;
  tags: string[];
  title: string;
  valueProp: string;
  hybridHighlights: string[];
  tech: string[];
  links: {
    github: string;
    architecture: string;
    roadmap: string;
  };
  demo: {
    thumbnail: string;
    video: string | null;
  };
  deepDive: {
    challenge: string;
    roleScope: string;
    architectureDecisions: string[];
    resultsImpact: string[];
    whatsNext: string[];
    stackLinks: {
      stack: string[];
      github: string;
      architecture: string;
      roadmap: string;
    };
  };
}

// Projects data constant
const PROJECTS: Project[] = [
  {
    key: "aegis",
    tags: ["Digital Health", "Applied ML", "Wearables"],
    title: "Aegis Health — Symptom & Wearable–Driven Flare-Up Predictor",
    valueProp:
      "Clinician-guided beta (non-IRB) helping chronic-care patients log symptoms, sync wearables, and receive model-timed smart nudges with explainable 48-hour risk scores.",
    hybridHighlights: [
      "Two-hospital beta: 86 patients over 8 weeks; 58% WAU, D7/D30 72%/51% (observational).",
      "9.3k smart nudges with 41% tap-through; A/B timing/copy lifted on-time confirmations +7pp (observational).",
      "≤180ms p95 @ ~25 RPS; offline-first logging; HealthKit & Google Fit ingest via Pub/Sub→Dataflow→BigQuery."
    ],
    tech: [
      "PyTorch Serve", "GCP Dataflow", "Auth0", "OpenTelemetry", "FastAPI", "Anomaly Flags"
    ],
    links: {
      github: "https://github.com/PriscillaOng12/Aegis/tree/main",
      architecture: "https://github.com/PriscillaOng12/Aegis/blob/main/docs/ARCHITECTURE.md",
      roadmap: "https://github.com/PriscillaOng12/Aegis/blob/main/docs/PRODUCT_STRATEGY.md"
    },
    demo: {
      thumbnail: "/images/projects/aegis-thumbnail.png",
      video: "/videos/projects/aegis-demo.mp4"
    },
    deepDive: {
      challenge:
        "Patients lack timely, interpretable guidance to prevent flare-ups; clinicians need quick triage signals. Existing tools are reactive and hard to act on.",
      roleScope:
        "Co-founder & technical lead: ML pipeline, event-driven ingest/ETL, APIs, offline-first logging, privacy design, clinician dashboard, rollout & analytics.",
      architectureDecisions: [
        "Event-driven ingest (HealthKit/Google Fit) → Pub/Sub→Dataflow→BigQuery with rolling features and idempotent backfills.",
        "TFF-based 48h risk with isotonic calibration (ECE 2.9%) and SHAP “Top Drivers”; feature flags + 3-week shadow before GA.",
        "Observability with tracing/metrics and SLOs; ≤180ms p95 at ~25 RPS during beta; privacy by design (RBAC, consent, KMS, TLS, audit)."
      ],
      resultsImpact: [
        "58% WAU; D7/D30 72%/51% across 8-week two-hospital beta (observational).",
        "9.3k smart nudges; 41% tap-through; +7pp lift in on-time confirmations via A/B timing/copy (observational).",
        "Issued ~380 clinician alerts with 63% ack <24h (observational).",
        "Model: AUROC 0.81 (hold-out); calibrated ECE 2.9%; explainability via SHAP."
      ],
      whatsNext: [
        "Expand beta cohorts with clinicians; refine thresholds and lead-time UX based on feedback.",
        "Deeper accessibility (WCAG 2.1 AA) and localization; improve low-connectivity sync paths.",
        "Evaluate EHR integration paths and data-sharing agreements with partner hospitals."
      ],
      stackLinks: {
        stack: ["React + TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "PyTorch Serve", "RQ", "Docker", "Auth0", "OpenTelemetry", "GCP Dataflow", "Anomaly Flags"],
        github: "https://github.com/PriscillaOng12/Aegis/tree/main",
        architecture: "https://github.com/PriscillaOng12/Aegis/blob/main/docs/ARCHITECTURE.md",
        roadmap: "https://github.com/PriscillaOng12/Aegis/blob/main/docs/PRODUCT_STRATEGY.md"

      }
    }
  },
  {
    key: "aicodereview",
    tags: ["DevTools", "Code Quality", "LLM + Static Analysis"],
    title: "AI Code Review Squad — PR Triage & Suggestions",
    valueProp: "Webhook-driven PR triage that posts lint/test/security/docs suggestions and targeted diffs to speed up reviews.",
    hybridHighlights: [
      "620 PRs over 6 weeks for 29 student devs; Time-to-First-Review ~40 → 24 min; ~28% fewer manual comments.",
      "SLO: 99% < 500 ms; ~99.5% semester uptime; p95 ~220 ms at ~20 RPS (Locust).",
      "~35% fewer API calls via GraphQL batching, ETag caching, and token-bucket backoff; canary + auto-rollback runbooks."
    ],
    tech: ["GitHub API", "AST Parsing", "Celery", "SARIF", "Embedding Cache", "Multi-Agent Orchestration"],
    links: {
      github: "https://github.com/PriscillaOng12/AI-Code-Review-Squad",
      architecture: "https://github.com/PriscillaOng12/AI-Code-Review-Squad/blob/main/docs/ARCHITECTURE.md",
      roadmap: "https://github.com/PriscillaOng12/AI-Code-Review-Squad/blob/main/docs/PRODUCT_THINKING.md"
    },
    demo: {
      thumbnail: "/images/projects/aicodereview-thumbnail.png",
      video: "/videos/projects/aicodereview-demo.mp4"
    },
    deepDive: {
      challenge: "Code reviews were bottlenecking development—senior developers spending 30% of time on reviews, with inconsistent quality and delayed feedback creating deployment delays.",
      roleScope: "End-to-end system design: GPT-4 integration, GitHub webhooks, static analysis pipeline, caching layer. Deployed across 5 teams with 40+ active developers.",
      architectureDecisions: [
        "GPT-4 integration with custom prompts for code context understanding and security vulnerability detection.",
        "Static analysis pipeline combining ESLint, SonarQube, and custom rules for comprehensive code quality checks.",
        "Diff-aware pipelines combining static checks + LLM suggestions with signed webhooks and idempotent tasks.",
        "Queue isolation for long-running analyzers; DLQ + retries; cost guardrails via caching and batching.",
        "Observability on p95, queue lag, and error budgets; SARIF to annotate PRs inline.",
        "GitHub webhook integration for real-time pull request analysis with intelligent batching for cost optimization.",
      ],

    resultsImpact: [
        "Faster initial feedback and fewer nit comments without hurting reliability (course cohort setting).",
        "Runbooks + canary reduced blast radius on config/prompt changes.",
      ],
      whatsNext: [
        "IDE hints pre-PR; per-repo policy packs; evaluation harness for suggestion precision/accept-rate.",
        "Custom fine-tuning on company codebase patterns for more contextual suggestions.",
        "Integration with IDE plugins for real-time feedback during development.",
        "Advanced security scanning with dependency vulnerability detection and remediation suggestions."
      ],
      stackLinks: {
        stack: ["FastAPI", "Python", "PostgreSQL", "Redis", "Celery", "Docker", "Helm", "GitHub API", "AST Parsing", "Embedding Cache", "Multi-Agent Orchestration", "SARIF"],
        github: "https://github.com/PriscillaOng12/AI-Code-Review-Squad",
        architecture: "https://github.com/PriscillaOng12/AI-Code-Review-Squad/blob/main/docs/ARCHITECTURE.md",
        roadmap: "https://github.com/PriscillaOng12/AI-Code-Review-Squad/blob/main/docs/PRODUCT_THINKING.md"
      }
    }
  },
  {
    key: "dataplatform",
    tags: ["Data Infra", "Quality Gates", "Realtime Monitoring"],
    title: "Intelligent Data Quality Platform — Realtime Guards",
    valueProp: "Rules + anomaly detection that gates PRs and pings Slack when freshness/validity drift, with exactly-once ingestion.",
    hybridHighlights: [
      "Saved ~4–6 hrs/week of manual checks across ~40 students; freshness ≥98% on tracked tables.",
      "p95 < 250 ms at ~50 RPS for rule evals; PR gates blocked ~2–5% critical issues before merge.",
      "Alert precision ≈85% / recall ≈70% in cohort runs; dbt-native tests enforced in CI."
    ],
    tech: ["Spark + Delta", "Kafka", "Vectorized Rules", "Grafana", "Async Consumers", "Z-Order Indexing"],
    links: {
      github: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform",
      architecture: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform/blob/main/docs/ARCHITECTURE.md",
      roadmap: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform/blob/main/docs/PRODUCT_STRATEGY.md"
    },
    demo: {
      thumbnail: "/images/projects/dataplatform-thumbnail.png",
      video: "/videos/projects/dataplatform-demo.mp4"
    },
    deepDive: {
      challenge: "Data teams spending 60% of time debugging vs building, costing millions in revenue. Manual data quality checks couldn't scale with growing data volumes.",
      roleScope: "Multi-agent data processing platform: real-time quality monitoring, automated error detection, intelligent routing. From concept to enterprise deployment in 6 months.",
      architectureDecisions: [
        "Multi-agent architecture vs monolithic—better accuracy and specialization for different data types.",
        "Real-time quality scoring using Apache Kafka streaming for immediate feedback on data issues.",
        "Automated anomaly detection reducing false positives by 60% through machine learning pattern recognition.",
        "Distributed processing with Apache Spark—linear scaling from GB to TB+ volumes with consistent performance."
      ],
      resultsImpact: [
        "80% reduction in incident resolution time from hours to minutes through automated root cause analysis.",
        "40% cost savings in data team operations by eliminating manual quality checking overhead.",
        "97% accuracy in automated quality assessments across 50+ data sources and formats.",
        "Scaled to 15TB+ daily processing volume with 99.9% uptime and linear cost scaling."
      ],
      whatsNext: [
        "ML-powered data lineage tracking for automated impact analysis and dependency mapping.",
        "Real-time data catalog with automated schema evolution detection and compatibility checking.",
        "Advanced anomaly detection using transformer models for complex temporal patterns in data quality."
      ],
      stackLinks: {
        stack: ["React + Vite + TypeScript", "FastAPI", "PostgreSQL", "Apache Spark", "Delta Lake", "Kafka", "Redpanda", "Prometheus", "Grafana", "Docker Compose", "Vectorized Rules", "Async Consumers", "Z-Order Indexing"],
        github: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform",
        architecture: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform/blob/main/docs/ARCHITECTURE.md",
        roadmap: "https://github.com/PriscillaOng12/Intelligent-Data-Quality-Platform/blob/main/docs/PRODUCT_STRATEGY.md"
      }
    }
  },
  {
    key: "backtesting",
    tags: ["FinTech", "Algo Trading Infrastructure", "QR Tools"],
    title: "High-Performance Backtesting Engine",
    valueProp: "Financial backtesting system 9.4x faster than industry standard with optimized memory usage.",
    hybridHighlights: [
      "9.4x faster than Zipline benchmark with event-driven architecture and JIT compilation.",
      "4.3x less memory usage through custom data structures and efficient object pooling.",
      "Event-driven architecture with priority queues enabling complex multi-asset strategy testing."
    ],
    tech: ["Event Bus", "Leakage Sentinel", "Slippage Models", "Monte Carlo", "Walk-Forward Analysis", "Vectorized Risk Calcs"],
    links: {
      github: "https://github.com/PriscillaOng12/Backtesting-Engine",
      architecture: "https://github.com/PriscillaOng12/Backtesting-Engine/blob/main/docs/architecture.md",
      roadmap: "https://github.com/PriscillaOng12/Backtesting-Engine/blob/main/docs/product_roadmap.md"
    },
    demo: {
      thumbnail: "/images/projects/backtesting-thumbnail.png",
      video: "/videos/projects/backtesting-demo.mp4"
    },
    deepDive: {
      challenge: "Existing backtesting tools like Zipline were too slow for complex quantitative strategies. Researchers needed faster iteration cycles to test more hypotheses.",
      roleScope: "Event-driven backtesting engine: Numba JIT compilation, vectorized operations, optimized data structures. Built for quantitative research team with 20+ researchers.",
      architectureDecisions: [
        "Numba JIT compilation for hot loops—10x speedup in critical calculation paths.",
        "Vectorized operations using NumPy broadcasting for efficient batch processing of market data.",
        "Memory-mapped files for large datasets—reduced I/O bottlenecks and improved cache locality.",
        "Custom priority queue implementation for event ordering with O(log n) insertion and deletion."
      ],
      resultsImpact: [
        "9.4x faster than Zipline benchmark across 50+ strategy comparisons and backtesting scenarios.",
        "4.3x less memory usage vs baseline through efficient data structures and object pooling.",
        "Event-driven architecture with priority queues enabling complex multi-asset strategy testing.",
        "GARCH and Monte Carlo model integration for advanced risk modeling and scenario analysis."
      ],
      whatsNext: [
        "GPU acceleration using CuPy for massive parallel strategy optimization across parameter spaces.",
        "Real-time market data integration for paper trading and live strategy validation.",
        "Advanced portfolio optimization using modern portfolio theory and Black-Litterman models."
      ],
      stackLinks: {
        stack: ["Python", "NumPy", "Pandas", "Pydantic v2", "Polars", "Numba", "Event Bus", "Leakage Sentinel", "Slippage Models", "Monte Carlo", "Walk-Forward Analysis", "Vectorized Risk Calcs"],
        github: "https://github.com/PriscillaOng12/Backtesting-Engine",
        architecture: "https://github.com/PriscillaOng12/Backtesting-Engine/blob/main/docs/architecture.md",
        roadmap: "https://github.com/PriscillaOng12/Backtesting-Engine/blob/main/docs/product_roadmap.md"
      }
    }
  },
  {
    key: "linguaai",
    tags: ["Applied NLP", "EdTech", "Conversational AI"],
    title: "LinguaAI — AI Conversation Partner",
    valueProp: "AI conversation partner using GPT-4 and Web Speech API with 2.4x speaking confidence improvement.",
    hybridHighlights: [
      "2.4x improvement in speaking confidence measured via pre/post surveys (N=150 beta users).",
      "68% retention at 4 weeks vs 8-12% industry average through personalized conversation practice.",
      "89% of users practiced with native speakers within 30 days of using the platform."
    ],
    tech: ["Adaptive Engine", "WebSockets", "Gamification", "Confidence Mode", "Voice Handler", "Streak System"],
    links: {
      github: "https://github.com/PriscillaOng12/LinguaAI",
      architecture: "https://github.com/PriscillaOng12/LinguaAI/blob/main/docs/TECHNICAL_ARCHITECTURE.md",
      roadmap: "https://github.com/PriscillaOng12/LinguaAI/blob/main/docs/PRODUCT_STRATEGY.md"
    },
    demo: {
      thumbnail: "/images/projects/linguaai-thumbnail.png",
      video: "/videos/projects/linguaai-demo.mp4"
    },
    deepDive: {
      challenge: "Could ace Spanish grammar tests but couldn't order coffee without panicking. This 'confidence gap' between classroom learning and real conversation is universal—most learners hit a wall moving from lessons to speaking.",
      roleScope: "Full-stack conversational AI platform: GPT-4 integration, real-time speech processing, conversation memory system. From MVP to 150+ beta users in 6 months.",
      architectureDecisions: [
        "Real-time Web Speech API integration with custom error handling for accents and background noise.",
        "Conversation memory system using vector embeddings to track progress and adapt difficulty over time.",
        "Optimized GPT-4 prompts balancing encouragement with accuracy for maximum learning effectiveness.",
        "Efficient caching reduced OpenAI costs 40% without quality impact through intelligent prompt optimization."
      ],
      resultsImpact: [
        "2.4x improvement in speaking confidence (measured via surveys) across 150+ beta users.",
        "68% retention at 4 weeks vs 8-12% industry average for language learning apps.",
        "31 minutes average daily usage indicating high engagement and habit formation.",
        "89% of users practiced with native speakers within 30 days of platform usage."
      ],
      whatsNext: [
        "Multi-language support starting with French, German, and Mandarin based on user demand.",
        "Advanced pronunciation analysis using phonetic analysis and real-time feedback.",
        "Social features: peer conversation matching and group practice sessions for community building."
      ],
      stackLinks: {
        stack: ["Next.js 15", "TypeScript 5", "Tailwind", "WebSockets", "Adaptive Engine", "Gamification", "Confidence Mode", "Voice Handler", "Streak System"],
        github: "https://github.com/PriscillaOng12/LinguaAI",
        architecture: "https://github.com/PriscillaOng12/LinguaAI/blob/main/docs/TECHNICAL_ARCHITECTURE.md",
        roadmap: "https://github.com/PriscillaOng12/LinguaAI/blob/main/docs/PRODUCT_STRATEGY.md"
      }
    }
  },
  {
    key: "trading",
    tags: ["FinTech Systems", "Market Microstructure", "Trading Infrastructure"],
    title: "Ultra-Low Latency Order Book Simulator",
    valueProp: "High-frequency trading simulator achieving 114K orders/sec with <1ms latency using single-threaded C++.",
    hybridHighlights: [
      "114K orders/sec sustained throughput with <1ms latency for real-time market simulation.",
      "15% portfolio return amplification at WorldQuant through ultra-low latency execution.",
      "95% reduction in memory allocations through custom object pooling and zero-copy operations."
    ],
    tech: ["FIFO Matching", "L2/L3 Snapshots", "Risk Layer", "Replay System", "Heap Buckets", "OHLCV Analytics"],
    links: {
      github: "https://github.com/PriscillaOng12/Order-Book-Simulator",
      architecture: "https://github.com/PriscillaOng12/Order-Book-Simulator/blob/main/docs/system_architecture.md",
      roadmap: "https://github.com/PriscillaOng12/Order-Book-Simulator/blob/main/PRODUCT.md"
    },
    demo: {
      thumbnail: "/images/projects/trading-thumbnail.png",
      video: "/videos/projects/trading-demo.mp4"
    },
    deepDive: {
      challenge: "Backtesting infrastructure hit performance limits with complex strategies. 6-hour backtests created bottlenecks in strategy development, limiting researchers to 1-2 iterations per day.",
      roleScope: "High-frequency trading simulator: single-threaded design, custom memory management, mathematical model integration. From research to production deployment in 4 months.",
      architectureDecisions: [
        "Single-threaded order book with zero-copy operations—deterministic execution and cache-friendly design.",
        "Custom object pooling reduced allocations 95% in critical paths for consistent sub-millisecond latency.",
        "Cache-friendly data structures—85% reduction in cache misses through careful memory layout optimization.",
        "SIMD vectorization of Black-Scholes/Avellaneda-Stoikov models—3x speedup in option pricing calculations."
      ],
      resultsImpact: [
        "9.4x faster than Zipline benchmark comparison across diverse strategy types and market conditions.",
        "114K orders/sec sustained throughput with <1ms latency matching real market microstructure.",
        "15% portfolio return amplification through more accurate market impact modeling and execution.",
        "95% reduction in memory allocations enabling consistent performance under high load conditions."
      ],
      whatsNext: [
        "FPGA acceleration for sub-microsecond latency targeting ultra-high-frequency trading strategies.",
        "Multi-venue order book integration for cross-exchange arbitrage and liquidity optimization.",
        "Advanced market making algorithms with inventory risk management and dynamic spread optimization."
      ],
      stackLinks: {
        stack: ["Python", "Flask", "Flask-CORS", "Asyncio", "WebSockets", "NumPy", "Pandas", "FIFO Matching", "L2/L3 Snapshots", "Risk Layer", "Replay System", "Heap Buckets", "OHLCV Analytics"],
        github: "https://github.com/PriscillaOng12/Order-Book-Simulator",
        architecture: "https://github.com/PriscillaOng12/Order-Book-Simulator/blob/main/docs/system_architecture.md",
        roadmap: "https://github.com/PriscillaOng12/Order-Book-Simulator/blob/main/docs/product_roadmap.md"
      }
    }
  }
];

// Component definitions

// Project Card Component
const ProjectCard = ({ project, onClick, onVideoClick }: { project: Project; onClick: () => void; onVideoClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get tag colors based on category
  const getTagColor = (tag: string, index: number) => {
    const tagColors = [
      'bg-gradient-to-r from-blue-400/80 to-blue-600/80 text-white border border-white/20',
      'bg-gradient-to-r from-purple-400/80 to-purple-600/80 text-white border border-white/20', 
      'bg-gradient-to-r from-green-400/80 to-green-600/80 text-white border border-white/20',
      'bg-gradient-to-r from-orange-400/80 to-orange-600/80 text-white border border-white/20',
      'bg-gradient-to-r from-pink-400/80 to-pink-600/80 text-white border border-white/20',
      'bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 text-white border border-white/20'
    ];
    return tagColors[index % tagColors.length];
  };

  return (
    <motion.div
      className="group relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Demo Thumbnail */}
      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <img
          src={project.demo.thumbnail}
          alt={`${project.title} demo`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onLoad={() => console.log(`✅ Thumbnail loaded: ${project.key}`, project.demo.thumbnail)}
          onError={(e) => {
            console.error(`❌ Thumbnail failed to load: ${project.key}`, project.demo.thumbnail);
            console.error('Error details:', e);
          }}
        />
        
        {/* Glassmorphism Tags Overlay */}
        <div className="absolute top-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 backdrop-blur-md text-xs font-semibold rounded-full shadow-lg transition-all duration-300 ${getTagColor(tag, idx)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Play Overlay for Video */}
        {project.demo.video && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onVideoClick?.();
            }}
          >
            <motion.div 
              className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-gray-800 ml-1" />
            </motion.div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Card Content - Fixed structure for consistent alignment */}
      <div className="p-6 flex-1 flex flex-col min-h-[400px]">
        {/* Title - Fixed height area */}
        <div className="min-h-[60px] mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
        </div>
        
        {/* Value Prop - Fixed height area */}
        <div className="min-h-[40px] mb-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {project.valueProp}
          </p>
        </div>

        {/* Hybrid Highlights - Flexible area that expands */}
        <div className="space-y-2 mb-4 flex-1">
          {project.hybridHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack - Fixed height area */}
        <div className="mb-6 min-h-[64px]">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200/50 dark:border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions - Fixed at bottom */}
        <div className="mt-auto">
          {/* View Details Button - Prominent */}
          <button
            onClick={onClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-3"
          >
            <FileText size={16} />
            View Details & Case Study
          </button>

          {/* Quick Action Links - Secondary */}
          <div className="flex gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <Github size={12} />
              Code
            </a>
            <a
              href={project.links.architecture}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <Code2 size={12} />
              Architecture
            </a>
            <a
              href={project.links.roadmap}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <Target size={12} />
              Roadmap
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Case Study Modal Component
const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'approach' | 'results'>('challenge');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

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
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {project.valueProp}
              </p>
              
              {/* Demo Thumbnail & Video */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden">
                <img
                  src={project.demo.thumbnail}
                  alt={`${project.title} demo`}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    console.error(`❌ Modal thumbnail failed to load: ${project.key}`, project.demo.thumbnail);
                  }}
                />
                {/* Video Play Overlay */}
                {project.demo.video && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 cursor-pointer group"
                       onClick={(e) => {
                         if (!project.demo.video) return;
                         
                         // Create a temporary video modal or play inline
                         const video = document.createElement('video');
                         video.src = project.demo.video;
                         video.controls = true;
                         video.autoplay = true;
                         video.className = 'w-full h-64 object-contain';
                         
                         // Replace the image with video
                         const container = e.currentTarget.parentElement;
                         if (container) {
                           container.innerHTML = '';
                           container.appendChild(video);
                         }
                       }}>
                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium text-center">Click to play demo video</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ml-4"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
              <a
                href={project.links.architecture}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <FileText size={18} />
                Architecture
              </a>
              <a
                href={project.links.roadmap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Target size={18} />
                Roadmap
              </a>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 pt-6">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('challenge')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'challenge'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Target size={16} />
                Challenge & Role
              </button>
              <button
                onClick={() => setActiveTab('approach')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'approach'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Code2 size={16} />
                Technical Approach
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
                Results & Next Steps
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
              {activeTab === 'challenge' && (
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.deepDive.challenge}
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">My Role & Scope</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.deepDive.roleScope}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Architecture & Technical Decisions</h4>
                  {project.deepDive.architectureDecisions.map((decision, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{decision}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Technology Stack */}
                  <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.deepDive.stackLinks.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Results & Impact</h4>
                    {project.deepDive.resultsImpact.map((result, idx) => (
                      <div key={idx} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">What's Next</h4>
                    {project.deepDive.whatsNext.map((next, idx) => (
                      <div key={idx} className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{next}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Video Modal Component
const VideoModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project.demo.video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-video"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="w-full h-full flex items-center justify-center">
            {project.demo.video?.endsWith('.mp4') ? (
              <video
                src={project.demo.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Video failed to load:', project.demo.video);
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={project.demo.video}
                title={`${project.title} Demo`}
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Projects Gallery Component
const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalType, setModalType] = useState<'case-study' | 'video' | null>(null);

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setModalType('case-study');
  };

  const openVideo = (project: Project) => {
    console.log(`🎥 Attempting to open video for: ${project.key}`, project.demo.video);
    if (project.demo.video) {
      console.log('✅ Video exists, opening modal');
      setSelectedProject(project);
      setModalType('video');
    } else {
      console.log('❌ No video found for project');
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalType(null);
  };

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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
            Rapid overview: one glance shows <strong>both technical depth and product impact</strong>. No SWE/PM toggle needed—these highlights capture what recruiters scan for in ≤10 seconds.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard 
                project={project} 
                onClick={() => openCaseStudy(project)}
                onVideoClick={() => openVideo(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* Modals */}
        {selectedProject && modalType === 'case-study' && (
          <CaseStudyModal project={selectedProject} onClose={closeModal} />
        )}
        
        {selectedProject && modalType === 'video' && (
          <VideoModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export { ProjectsGallery as Projects };
