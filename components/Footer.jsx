import { Gauge } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-slate-300">
          <Gauge className="h-4 w-4 text-cyan-300" />
          Next Performance Lab
        </div>
        <p>Built for developers who want practical performance instincts, not folklore.</p>
      </div>
    </footer>
  );
}
