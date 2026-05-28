"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ code, tone = "neutral" }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1300);
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950">
      <button
        type="button"
        onClick={copyCode}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className={`max-h-[340px] p-4 pr-14 text-sm leading-6 ${tone === "bad" ? "text-orange-100" : tone === "good" ? "text-cyan-100" : "text-slate-200"}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
