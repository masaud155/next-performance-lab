import { BookOpen, Gauge, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-400 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-slate-200">
            <Gauge className="h-4 w-4 text-cyan-300" />
            Next Performance Lab
          </div>
          <p>Built for developers who want practical performance instincts, polished UI, and reusable learning examples.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/guide" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300 transition hover:bg-white/[0.06]">
            <BookOpen className="h-4 w-4" />
            Guide
          </Link>
          <a href="https://github.com/" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300 transition hover:bg-white/[0.06]">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
