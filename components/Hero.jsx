"use client";

import { ArrowRight, CheckCircle2, Github, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = ["Less JavaScript", "Faster Rendering", "Better Core Web Vitals", "Cleaner Data Fetching"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-lab-grid lab-grid opacity-35" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
            <Zap className="h-4 w-4" />
            Interactive Good vs Bad Next.js lab
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            7 Next.js Performance Habits That Improve Real Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            An interactive lab showing bad vs good Next.js performance decisions with real-world examples.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#habits"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore Habits
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm font-medium text-slate-200">{stat}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-xl border border-white/10 bg-slate-950/70 p-3 shadow-glow"
        >
          <div className="grid gap-3 lg:grid-cols-2">
            <MockDashboard title="Slow App" tone="bad" values={["420 KB JS", "High hydration", "Spinner first paint"]} />
            <MockDashboard title="Optimized App" tone="good" values={["120 KB JS", "Server first", "Content first paint"]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockDashboard({ title, tone, values }) {
  const good = tone === "good";
  return (
    <div className={`rounded-lg border p-4 ${good ? "border-emerald-300/25 bg-emerald-300/8" : "border-orange-400/25 bg-orange-500/8"}`}>
      <div className="mb-4 flex items-center justify-between">
        <p className={`text-sm font-semibold ${good ? "text-emerald-200" : "text-orange-200"}`}>{title}</p>
        <span className={`h-2.5 w-2.5 rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`} />
      </div>
      <div className="space-y-3">
        <div className={`h-24 rounded-lg ${good ? "bg-cyan-300/15" : "bg-red-400/15"}`}>
          <div className={`h-full rounded-lg ${good ? "w-4/5 bg-cyan-300/25" : "w-full bg-orange-400/20"}`} />
        </div>
        {values.map((value, index) => (
          <div key={value} className="flex items-center gap-3">
            <span className={`h-2 rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`} style={{ width: `${28 + index * 18}px` }} />
            <span className="text-xs text-slate-300">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
