"use client";

import { ArrowRight, BookOpen, CheckCircle2, Github, Gauge, Server, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "performance habits" },
  { value: "14", label: "good vs bad examples" },
  { value: "Live", label: "interactive demos" },
  { value: "Real", label: "project tips" }
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-lab-grid lab-grid opacity-25" />
      <div className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1500px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 xl:px-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Portfolio-grade Next.js performance lab
          </div>
          <h1 className="text-gradient max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Build faster Next.js instincts with visual good vs bad decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learn 7 performance habits through interactive comparisons, animated metrics, request timelines, code examples, quizzes, and production takeaways.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#habits" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/guide" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              <BookOpen className="h-4 w-4" />
              Open Guide
            </Link>
            <a href="https://github.com/masaud155/next-performance-lab" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="premium-card min-h-[104px] rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 max-w-[12rem] text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="glass-panel relative overflow-hidden rounded-3xl p-4">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Gauge className="h-4 w-4 text-cyan-300" />
              Performance dashboard preview
            </div>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">Live lab</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <MockDashboard title="Bad Next.js App" tone="bad" values={["420 KB JS", "High hydration", "Sequential requests"]} />
            <MockDashboard title="Optimized Next.js App" tone="good" values={["120 KB JS", "Server first", "Parallel data"]} />
          </div>
          <div className="mt-4 grid gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 sm:grid-cols-3">
            {["LCP 1.8s", "CLS 0.02", "INP 78ms"].map((metric, index) => (
              <div key={metric} className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-300/12 text-emerald-200">
                  <Server className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{metric}</p>
                  <p className="text-xs text-slate-500">Target {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockDashboard({ title, tone, values }) {
  const good = tone === "good";
  return (
    <div className={`rounded-2xl border p-4 ${good ? "border-emerald-300/25 bg-emerald-300/8" : "border-orange-400/25 bg-orange-500/8"}`}>
      <div className="mb-4 flex items-center justify-between">
        <p className={`text-sm font-semibold ${good ? "text-emerald-100" : "text-orange-100"}`}>{title}</p>
        <span className={`h-2.5 w-2.5 rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`} />
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              className={`h-16 rounded-xl ${good ? "bg-cyan-300/15" : "bg-red-400/15"}`}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.6, delay: item * 0.15, repeat: Infinity }}
            />
          ))}
        </div>
        {values.map((value, index) => (
          <div key={value} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
            {good ? <CheckCircle2 className="h-4 w-4 text-emerald-300" /> : <Zap className="h-4 w-4 text-orange-300" />}
            <span className="text-xs text-slate-300">{value}</span>
            <span className={`ml-auto h-2 rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`} style={{ width: `${28 + index * 16}px` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
