# Next Performance Lab

Next Performance Lab is a premium interactive Next.js learning app that teaches 7 real-world performance habits through good vs bad practice comparisons, animated metrics, code examples, quizzes, and production-focused explanations.

## Features

- Premium dark SaaS-style interface with glass panels, glowing dividers, and polished dashboard visuals
- Side-by-side, bad-only, good-only, and difference comparison modes
- Interactive performance impact slider for every habit
- Animated metric cards for bundle size, hydration, loading, image weight, and confidence indicators
- Code tabs for Bad Code, Good Code, Why It Matters, and Real Project Tip
- Copy-to-clipboard code snippets
- Animated request and loading timelines
- Mini quizzes with instant feedback and local progress tracking
- Real-world mistake and practical fix cards
- Difficulty and production-impact labels
- Dedicated `/guide` page with roadmap, usage guide, common mistakes, and final checklist
- Fully responsive App Router project using JSX only

## Screenshots

Screenshots coming soon.

## Tech Stack

- Next.js App Router
- React
- JavaScript and JSX
- Tailwind CSS
- Framer Motion
- lucide-react

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
app/
  guide/
    page.jsx
  layout.jsx
  page.jsx
  globals.css
components/
  CodeBlock.jsx
  CodeTabs.jsx
  FinalChecklist.jsx
  FinalSummary.jsx
  Footer.jsx
  GoodBadPanel.jsx
  GuidePreview.jsx
  GuideSection.jsx
  HabitNavigation.jsx
  HabitRoadmap.jsx
  Hero.jsx
  MetricCard.jsx
  Navbar.jsx
  PerformanceHabitComparison.jsx
  PerformanceSlider.jsx
  ProgressTracker.jsx
  QuizCard.jsx
  RealWorldTip.jsx
  TimelineDemo.jsx
data/
  guide.js
  habits.js
lib/
  utils.js
public/
  images/
```

## Learning Goals

This project helps developers learn how real Next.js performance improves when teams keep static UI on the server, isolate client components, fetch data in the right place, avoid request waterfalls, optimize images, control bundle size, and measure before optimizing.

## The 7 Habits

1. Server First, Client Only When Needed
2. Small Client Components
3. Data Fetching Where It Belongs
4. Avoid Request Waterfalls
5. Optimize Images Properly
6. Control Bundle Size
7. Measure Before Optimizing

## Guide Page

The `/guide` page explains how to use the lab effectively. It includes who the project is for, how to study each comparison, a step-by-step learning path, common performance mistakes, real project application notes, and a final pre-ship checklist.

## How to Contribute

Contributions are welcome. Useful improvements include new visual demos, clearer examples, accessibility refinements, screenshots, tests, and additional real-world performance scenarios.

1. Fork the repository.
2. Create a feature branch.
3. Make a focused change.
4. Run lint and build.
5. Open a pull request with a clear description.

## License

MIT
