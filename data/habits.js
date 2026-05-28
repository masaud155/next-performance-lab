export const habits = [
  {
    id: "server-first",
    number: 1,
    navTitle: "Server First, Client Only When Needed",
    title: "Server First, Client Only When Needed",
    badTitle: "Everything is a client component",
    goodTitle: "Server page with tiny client islands",
    badDescription: "The entire route ships as client JavaScript, fetches in useEffect, and waits for hydration before real content appears.",
    goodDescription: "The page renders on the server, fetches first-render data close to the route, and only sends JavaScript for interactive controls.",
    badCode: String.raw`"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <main>
      <ProductFilter value={filter} onChange={setFilter} />
      <ProductGrid products={products} filter={filter} />
    </main>
  );
}`,
    goodCode: String.raw`import ProductFilter from "./ProductFilter";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
      <ProductGrid products={products} />
      <ProductFilter />
    </main>
  );
}

// ProductFilter.jsx
"use client";

export default function ProductFilter() {
  return <button>Filter products</button>;
}`,
    badMetrics: [
      { label: "JS Bundle", value: "420 KB" },
      { label: "Hydration", value: "High" },
      { label: "First Load", value: "Slow" }
    ],
    goodMetrics: [
      { label: "JS Bundle", value: "120 KB" },
      { label: "Hydration", value: "Low" },
      { label: "First Load", value: "Fast" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "Heavy browser bundle controls the route before users can interact.",
      goodLabel: "Server-rendered content arrives first; only the filter hydrates."
    },
    beginnerExplanation: "Use client components only when a component needs browser features like state, events, refs, or effects. Static layout, data fetching, and content can usually stay on the server.",
    seniorExplanation: "Treat client boundaries as bundle boundaries. A top-level 'use client' opt-in pulls its import graph into the client build, increasing parse, execute, and hydration work.",
    takeaways: {
      changed: "The route moved data and markup back to the server while keeping the interactive filter as a small client island."
    },
    mistake: "Adding 'use client' to a page because one child needs a click handler.",
    productionTakeaway: "Default to server components. Push 'use client' down until it wraps only the smallest interactive surface.",
    quiz: {
      question: "Which file should usually receive 'use client' in this habit?",
      options: ["The whole route", "Only the interactive widget", "Every component"],
      answer: "Only the interactive widget",
      correct: "Exactly. Client JavaScript should be scoped to the interactive part.",
      incorrect: "Close, but the point is to keep the route server-rendered and isolate the interactive widget."
    },
    summary: {
      bad: "The full page is marked as client code.",
      good: "Only interactive widgets become client components.",
      benefit: "Less JavaScript, lower hydration cost, faster first render."
    }
  },
  {
    id: "small-client-components",
    number: 2,
    navTitle: "Small Client Components",
    title: "Small Client Components",
    badTitle: "A dropdown turns the dashboard client-side",
    goodTitle: "Interactive islands inside a server dashboard",
    badDescription: "A tiny dropdown forces charts, tables, headings, and static content into the browser bundle.",
    goodDescription: "The dashboard stays server-rendered while the dropdown is isolated as a small client component.",
    badCode: String.raw`"use client";

import DashboardShell from "./DashboardShell";
import RevenueTable from "./RevenueTable";
import RegionDropdown from "./RegionDropdown";

export default function Dashboard() {
  return (
    <DashboardShell>
      <RegionDropdown />
      <RevenueTable />
    </DashboardShell>
  );
}`,
    goodCode: String.raw`import DashboardShell from "./DashboardShell";
import RevenueTable from "./RevenueTable";
import RegionDropdown from "./RegionDropdown";

export default async function Dashboard() {
  const revenue = await getRevenue();

  return (
    <DashboardShell>
      <RegionDropdown />
      <RevenueTable rows={revenue} />
    </DashboardShell>
  );
}

// RegionDropdown.jsx
"use client";`,
    badMetrics: [
      { label: "Client Surface", value: "Whole page" },
      { label: "Hydration", value: "Wide" },
      { label: "Updates", value: "Noisy" }
    ],
    goodMetrics: [
      { label: "Client Surface", value: "Dropdown" },
      { label: "Hydration", value: "Narrow" },
      { label: "Updates", value: "Focused" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "One huge glowing client boundary wraps the complete dashboard.",
      goodLabel: "Small islands hydrate inside a stable server-rendered page."
    },
    beginnerExplanation: "A component can be interactive without making every parent interactive. Put the client boundary as low as possible.",
    seniorExplanation: "Small client components reduce client graph fan-out, limit hydration roots, and make rerender behavior easier to reason about.",
    takeaways: {
      changed: "Only the dropdown owns browser state. The dashboard shell, table, and static dashboard content stay server-first."
    },
    mistake: "Lifting 'use client' to the parent layout because importing the client widget felt simpler.",
    productionTakeaway: "Design dashboards as server layouts with interactive islands for filters, menus, editors, and buttons.",
    quiz: {
      question: "What is the best boundary for a small dropdown?",
      options: ["Dashboard page", "Dashboard layout", "Dropdown component"],
      answer: "Dropdown component",
      correct: "Right. The dropdown is the smallest component that actually needs client behavior.",
      incorrect: "The better boundary is the dropdown itself, not the surrounding dashboard."
    },
    summary: {
      bad: "A tiny dropdown forces the dashboard into the client bundle.",
      good: "Only the dropdown hydrates.",
      benefit: "Smaller bundles and clearer ownership of interaction."
    }
  },
  {
    id: "data-fetching",
    number: 3,
    navTitle: "Data Fetching Where It Belongs",
    title: "Data Fetching Where It Belongs",
    badTitle: "Important data waits for the browser",
    goodTitle: "First-render data loads on the server",
    badDescription: "The user sees loading spinners while the browser downloads JavaScript and then starts important requests.",
    goodDescription: "The route fetches first-render data before sending the page, using client fetching only for user-triggered refreshes.",
    badCode: String.raw`"use client";

export default function AccountPage() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetch("/api/account")
      .then((res) => res.json())
      .then(setAccount);
  }, []);

  if (!account) return <Spinner />;

  return <AccountOverview account={account} />;
}`,
    goodCode: String.raw`export default async function AccountPage() {
  const account = await getAccount();

  return (
    <>
      <AccountOverview account={account} />
      <RefreshBalanceButton accountId={account.id} />
    </>
  );
}`,
    badMetrics: [
      { label: "Initial UI", value: "Spinner" },
      { label: "Network Start", value: "After JS" },
      { label: "SEO", value: "Weak" }
    ],
    goodMetrics: [
      { label: "Initial UI", value: "Content" },
      { label: "Network Start", value: "Server" },
      { label: "SEO", value: "Strong" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "Multiple spinners appear while first-render data starts late.",
      goodLabel: "Meaningful content is available in the first server response."
    },
    beginnerExplanation: "If users need data to understand the page, fetch it before the page is sent. Save browser fetching for interactions after the page loads.",
    seniorExplanation: "Server data loading improves TTFB-to-content tradeoffs, avoids client waterfalls, and keeps primary content available to crawlers and no-JS fallbacks.",
    takeaways: {
      changed: "Critical data moved from useEffect into the server route, while refresh behavior remained client-side."
    },
    mistake: "Using useEffect as the default data loading tool for every screen.",
    productionTakeaway: "Classify data by when it is needed: first render, streaming chunk, or user-triggered update.",
    quiz: {
      question: "Where should critical first-render product data usually be fetched?",
      options: ["Server component", "useEffect", "setTimeout"],
      answer: "Server component",
      correct: "Yes. First-render data belongs close to the server route when possible.",
      incorrect: "For critical first-render content, fetch in the server component rather than waiting for the browser."
    },
    summary: {
      bad: "Important content waits for useEffect.",
      good: "Server fetches first-render data.",
      benefit: "Fewer spinners and faster meaningful content."
    }
  },
  {
    id: "request-waterfalls",
    number: 4,
    navTitle: "Avoid Request Waterfalls",
    title: "Avoid Request Waterfalls",
    badTitle: "Independent requests block each other",
    goodTitle: "Independent requests run in parallel",
    badDescription: "Profile, stats, notifications, and settings load one after another even though they do not depend on each other.",
    goodDescription: "Independent work starts together using Promise.all or a better server data shape.",
    badCode: String.raw`export default async function Dashboard() {
  const user = await getUser();
  const profile = await getProfile(user.id);
  const stats = await getStats(user.id);
  const notifications = await getNotifications(user.id);
  const settings = await getSettings(user.id);

  return <DashboardView {...{ user, profile, stats, notifications, settings }} />;
}`,
    goodCode: String.raw`export default async function Dashboard() {
  const user = await getUser();

  const [profile, stats, notifications, settings] = await Promise.all([
    getProfile(user.id),
    getStats(user.id),
    getNotifications(user.id),
    getSettings(user.id)
  ]);

  return <DashboardView {...{ user, profile, stats, notifications, settings }} />;
}`,
    badMetrics: [
      { label: "Timeline", value: "Sequential" },
      { label: "Wait Time", value: "Long" },
      { label: "Server Time", value: "Stacked" }
    ],
    goodMetrics: [
      { label: "Timeline", value: "Parallel" },
      { label: "Wait Time", value: "Short" },
      { label: "Server Time", value: "Flattened" }
    ],
    visualDemo: {
      type: "waterfall",
      badLabel: "User -> Profile -> Stats -> Notifications -> Settings.",
      goodLabel: "User loads first, then independent resources load in parallel."
    },
    beginnerExplanation: "If two requests do not need each other's result, start them at the same time.",
    seniorExplanation: "Waterfalls hide inside innocent awaits. Preserve dependency order only where real data dependencies exist, then batch independent reads.",
    takeaways: {
      changed: "Only the user request stays first because the other calls need the user id. The remaining requests run together."
    },
    mistake: "Writing awaits top to bottom without checking whether each one depends on the previous result.",
    productionTakeaway: "Draw the data dependency graph before optimizing. Parallelize independent edges, not dependent ones.",
    quiz: {
      question: "When is Promise.all appropriate?",
      options: ["For independent requests", "For every request", "Only in browsers"],
      answer: "For independent requests",
      correct: "Correct. Parallelize work that can safely run at the same time.",
      incorrect: "Promise.all is best for independent work. Dependent requests still need ordering."
    },
    summary: {
      bad: "Independent requests run sequentially.",
      good: "Independent requests run in parallel.",
      benefit: "Shorter server timelines and faster dashboards."
    }
  },
  {
    id: "images",
    number: 5,
    navTitle: "Optimize Images Properly",
    title: "Optimize Images Properly",
    badTitle: "Huge image with no sizing strategy",
    goodTitle: "Responsive image with stable dimensions",
    badDescription: "A normal img tag ships a massive asset, causes layout shift, and loads poorly on mobile.",
    goodDescription: "next/image sends responsive sizes, reserves layout space, and prioritizes only the hero image.",
    badCode: String.raw`export default function Hero() {
  return (
    <section>
      <img src="/images/hero-large.jpg" />
      <h1>Launch faster products</h1>
    </section>
  );
}`,
    goodCode: String.raw`import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/hero-large.jpg"
        alt="Product dashboard"
        width={1440}
        height={900}
        sizes="(max-width: 768px) 100vw, 60vw"
        priority
      />
      <h1>Launch faster products</h1>
    </section>
  );
}`,
    badMetrics: [
      { label: "Image Size", value: "3.2 MB" },
      { label: "Layout Shift", value: "High" },
      { label: "Mobile Load", value: "Slow" }
    ],
    goodMetrics: [
      { label: "Image Size", value: "280 KB" },
      { label: "Layout Shift", value: "Low" },
      { label: "Mobile Load", value: "Fast" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "A large image delays rendering and shifts content as it loads.",
      goodLabel: "Responsive image variants reserve space and load the right asset."
    },
    beginnerExplanation: "Images are often the largest thing on a page. Tell Next.js their dimensions and how wide they will be at each screen size.",
    seniorExplanation: "Use next/image to coordinate intrinsic dimensions, responsive srcsets, lazy loading defaults, and explicit priority for above-the-fold LCP candidates.",
    takeaways: {
      changed: "The image now has intrinsic dimensions, responsive sizing, alt text, and deliberate priority."
    },
    mistake: "Dropping a high-resolution marketing image into a hero without width, height, or sizes.",
    productionTakeaway: "Audit image bytes and layout shift together. Image optimization is both network and layout work.",
    quiz: {
      question: "Which prop helps the browser choose the right responsive image candidate?",
      options: ["sizes", "className", "onClick"],
      answer: "sizes",
      correct: "Yes. sizes tells the browser how much viewport width the image will occupy.",
      incorrect: "The important responsive loading hint here is the sizes prop."
    },
    summary: {
      bad: "Huge img tag with no dimensions.",
      good: "next/image with width, height, sizes, and priority when appropriate.",
      benefit: "Lower image bytes, less CLS, better LCP."
    }
  },
  {
    id: "bundle-size",
    number: 6,
    navTitle: "Control Bundle Size",
    title: "Control Bundle Size",
    badTitle: "Heavy libraries load with the route",
    goodTitle: "Heavy widgets load only when needed",
    badDescription: "Charts, editors, maps, or dashboards are imported directly into the main route bundle.",
    goodDescription: "Client-only heavy components are split with dynamic imports and loaded when they become useful.",
    badCode: String.raw`"use client";

import AnalyticsChart from "@/components/AnalyticsChart";

export default function ReportsPage() {
  return (
    <section>
      <SummaryCards />
      <AnalyticsChart />
    </section>
  );
}`,
    goodCode: String.raw`"use client";

import dynamic from "next/dynamic";

const AnalyticsChart = dynamic(() => import("@/components/AnalyticsChart"), {
  loading: () => <ChartSkeleton />,
  ssr: false
});

export default function ReportsPage() {
  return (
    <section>
      <SummaryCards />
      <AnalyticsChart />
    </section>
  );
}`,
    badMetrics: [
      { label: "Initial Bundle", value: "Large" },
      { label: "Parse Cost", value: "High" },
      { label: "Route Load", value: "Blocked" }
    ],
    goodMetrics: [
      { label: "Initial Bundle", value: "Smaller" },
      { label: "Parse Cost", value: "Lower" },
      { label: "Route Load", value: "Progressive" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "A huge bundle block must parse before the route feels ready.",
      goodLabel: "The main route stays lean while heavy chunks load on demand."
    },
    beginnerExplanation: "Do not make every visitor download a heavy chart or editor before they need it.",
    seniorExplanation: "Dynamic imports create chunk boundaries. They are most useful for client-only, heavy, below-the-fold, or conditional functionality.",
    takeaways: {
      changed: "The chart moved behind a dynamic import with a loading state, reducing the first route payload."
    },
    mistake: "Importing a large visualization library on a route where the chart is secondary.",
    productionTakeaway: "Use bundle analysis to find heavy modules, then split only the code that meaningfully affects initial load.",
    quiz: {
      question: "What is a strong candidate for dynamic import?",
      options: ["A heavy chart", "A paragraph", "A small icon"],
      answer: "A heavy chart",
      correct: "Right. Heavy client-only widgets are good candidates for code splitting.",
      incorrect: "Dynamic import is most valuable for large or conditional client-only pieces."
    },
    summary: {
      bad: "Heavy libraries enter the main route bundle.",
      good: "Dynamic imports split heavy client widgets.",
      benefit: "Smaller initial JavaScript and faster route startup."
    }
  },
  {
    id: "measure",
    number: 7,
    navTitle: "Measure Before Optimizing",
    title: "Measure Before Optimizing",
    badTitle: "Random optimization guesses",
    goodTitle: "Measurement guides the fix",
    badDescription: "The team adds memoization, lazy loading, and rewrites without knowing the actual bottleneck.",
    goodDescription: "The team checks Core Web Vitals, bundle analysis, server logs, timelines, and production metrics before changing architecture.",
    badCode: String.raw`export default function ProductPage({ product }) {
  const title = useMemo(() => product.title, [product]);
  const price = useMemo(() => formatPrice(product.price), [product]);

  return (
    <LazyEverything>
      <ProductHero title={title} price={price} />
    </LazyEverything>
  );
}`,
    goodCode: String.raw`// 1. Check field data: LCP is slow on mobile product pages.
// 2. Run bundle analysis: product gallery ships 260 KB.
// 3. Inspect server timing: recommendations API adds 900 ms.
// 4. Fix the measured causes.

export default async function ProductPage() {
  const [product, reviews] = await Promise.all([
    getProduct(),
    getReviews()
  ]);

  return <ProductPageView product={product} reviews={reviews} />;
}`,
    badMetrics: [
      { label: "Confidence", value: "Low" },
      { label: "Effort", value: "Scattered" },
      { label: "Impact", value: "Unknown" }
    ],
    goodMetrics: [
      { label: "Confidence", value: "High" },
      { label: "Effort", value: "Focused" },
      { label: "Impact", value: "Verified" }
    ],
    visualDemo: {
      type: "bundle",
      badLabel: "Random guesses create churn without proving user impact.",
      goodLabel: "LCP, CLS, INP, bundle size, server timing, and waterfall data guide the work."
    },
    beginnerExplanation: "Measure first so you fix the problem users actually have, not the problem that feels interesting.",
    seniorExplanation: "Optimization without telemetry creates local wins and production regressions. Use lab data for diagnosis and field data for priority.",
    takeaways: {
      changed: "The workflow starts with evidence, chooses a specific bottleneck, applies a targeted fix, and verifies the result."
    },
    mistake: "Adding React memoization everywhere before checking whether rendering is the slow part.",
    productionTakeaway: "Keep a repeatable performance loop: measure, identify, change, verify, and monitor after deploy.",
    quiz: {
      question: "What should happen before a major optimization rewrite?",
      options: ["Measure the bottleneck", "Add memo everywhere", "Rewrite the route"],
      answer: "Measure the bottleneck",
      correct: "Exactly. Measurement turns performance work into engineering instead of guessing.",
      incorrect: "Start with measurement so the fix matches the real bottleneck."
    },
    summary: {
      bad: "Random optimizations are applied without evidence.",
      good: "Metrics identify and verify the bottleneck.",
      benefit: "Less churn and more reliable real-user improvement."
    }
  }
];
