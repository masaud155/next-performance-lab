"use client";

import { BookOpen, Github, Gauge, Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#habits", label: "Habits", icon: Gauge },
  { href: "/guide", label: "Guide", icon: BookOpen },
  { href: "https://github.com/masaud155/next-performance-lab", label: "GitHub", icon: Github, external: true }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg font-semibold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-glow">
            <Gauge className="h-5 w-5" />
          </span>
          <span>Next Performance Lab</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = !link.external && (pathname === link.href || (link.href === "/" && pathname === "/") || (link.href === "/guide" && pathname === "/guide"));
            const className = `focus-ring inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${active ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5 hover:text-white"}`;
            if (link.external) {
              return (
                <a key={link.label} href={link.href} className={className}>
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className={className}>
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-panel md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
              {links.map((link) => {
                const content = (
                  <>
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </>
                );
                const className = "focus-ring flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-slate-200 transition hover:bg-white/5";
                if (link.external) {
                  return <a key={link.label} href={link.href} onClick={() => setOpen(false)} className={className}>{content}</a>;
                }
                return <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className={className}>{content}</Link>;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
