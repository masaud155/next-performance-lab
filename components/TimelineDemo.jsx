"use client";

import { motion } from "framer-motion";

export default function TimelineDemo({ type = "bundle", mode = "bad", progress = 0 }) {
  const good = mode === "good" || progress > 68;

  if (type === "waterfall") {
    const items = ["User", "Profile", "Stats", "Notifications", "Settings"];
    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={false}
            animate={{ x: good ? 0 : index * 18, width: good && index > 0 ? "70%" : `${42 + index * 10}%` }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
            className={`h-9 rounded-lg border px-3 py-2 text-xs font-semibold ${good ? "border-cyan-300/25 bg-cyan-300/12 text-cyan-100" : "border-orange-300/25 bg-orange-300/12 text-orange-100"}`}
          >
            {item}
          </motion.div>
        ))}
      </div>
    );
  }

  const badBlocks = ["Route JS", "Hydrate", "Fetch", "Render"];
  const goodBlocks = ["Server HTML", "Small island", "Ready"];
  const blocks = good ? goodBlocks : badBlocks;

  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {blocks.map((block, index) => (
          <motion.div
            key={block}
            initial={{ opacity: 0.35, scaleX: 0.82 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className={`origin-left rounded-xl border p-3 text-sm font-semibold ${good ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100" : "border-orange-300/25 bg-orange-300/10 text-orange-100"}`}
            style={{ width: good ? `${88 - index * 9}%` : `${72 + index * 7}%` }}
          >
            {block}
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={index}
            className={`h-2 rounded-full ${good ? "bg-emerald-300" : "bg-orange-300"}`}
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.1, delay: index * 0.12, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}
