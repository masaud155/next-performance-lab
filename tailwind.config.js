/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070c",
        inkSoft: "#090d16",
        panel: "#0d111a",
        panelSoft: "#121826",
        line: "rgba(148, 163, 184, 0.16)",
        cyanGlow: "#22d3ee"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.14)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "lab-grid": "linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
