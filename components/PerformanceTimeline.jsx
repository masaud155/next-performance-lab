"use client";

import { motion } from "framer-motion";

export default function PerformanceTimeline({ type = "bundle", optimized = false, applied = false }) {
  const good = optimized || applied;

  if (type === "waterfall") {
    const items = ["User", "Profile", "Stats", "Notifications", "Settings"];
    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={false}
            animate={{ marginLeft: good ? 0 : index * 18, width: good ? "78%" : `${48 + index * 9}%` }}
            className={`h-8 rounded-md border px-3 py-1 text-xs font-medium ${good ? "border-cyan-300/25 bg-cyan-300/15 text-cyan-100" : "border-orange-300/25 bg-orange-400/15 text-orange-100"}`}
          >
            {item}
          </motion.div>
        ))}
      </div>
    );
  }

  const blocks = good ? ["Server HTML", "Tiny island", "Ready"] : ["Route JS", "Hydration", "Fetch", "Render"];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {blocks.map((block, index) => (
          <motion.div
            key={block}
            initial={{ opacity: 0.4, scaleX: 0.85 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: index * 0.12, repeat: Infinity, repeatDelay: 1.6, duration: 0.45 }}
            className={`h-9 origin-left rounded-md px-3 py-2 text-center text-xs font-medium ${good ? "bg-emerald-300/18 text-emerald-100" : "bg-orange-400/18 text-orange-100"}`}
            style={{ flex: good ? (index === 0 ? 1.5 : 0.9) : index === 0 ? 2 : 1 }}
          >
            {block}
          </motion.div>
        ))}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className={`h-full rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`}
          animate={{ width: good ? "86%" : "42%" }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}
