export const guideSections = [
  {
    id: "teaches",
    title: "What This Project Teaches",
    body: "Next Performance Lab teaches real-world Next.js performance habits through visual good vs bad comparisons, code examples, metrics, timelines, and short quizzes."
  },
  {
    id: "audience",
    title: "Who This Project Is For",
    body: "It is designed for beginner Next.js developers, frontend developers, React developers moving to Next.js, students building portfolio projects, open-source learners, and engineers improving performance judgment.",
    bullets: [
      "Beginner Next.js developers",
      "Frontend and React developers",
      "Developers improving performance skills",
      "Students building portfolio projects",
      "Open-source learners"
    ]
  },
  {
    id: "how",
    title: "How to Use the App",
    body: "Start with habit 1, compare the bad and good implementations, read the code, interact with the metrics, answer the quiz, and track your progress through the seven habits."
  },
  {
    id: "comparison",
    title: "Bad vs Good Practice Explanation",
    body: "Read each comparison panel as a production review: the bad side shows the common mistake, the good side shows the improved architecture, and the difference view explains the practical change."
  },
  {
    id: "application",
    title: "Real Project Application",
    body: "Apply the habits during feature planning, pull request review, and performance debugging. Use the checklist before shipping routes that include data fetching, images, client components, or heavy libraries."
  }
];

export const learningPath = [
  "Server First, Client Only When Needed",
  "Keep Client Components Small",
  "Fetch Data Where It Belongs",
  "Avoid Request Waterfalls",
  "Optimize Images Properly",
  "Control Bundle Size",
  "Measure Before Optimizing"
];

export const commonMistakes = [
  "Using \"use client\" everywhere",
  "Fetching all data in useEffect",
  "Ignoring image width, height, and sizes",
  "Importing heavy libraries directly into important routes",
  "Not checking bundle size",
  "Guessing performance problems",
  "Not measuring real Core Web Vitals"
];

export const finalChecklist = [
  "Did I keep static UI on the server?",
  "Did I isolate client components?",
  "Did I avoid request waterfalls?",
  "Did I optimize images?",
  "Did I check bundle size?",
  "Did I measure Core Web Vitals?",
  "Did I test on real devices?"
];
