import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HabitNavigation from "@/components/HabitNavigation";
import PerformanceHabitComparison from "@/components/PerformanceHabitComparison";
import FinalSummary from "@/components/FinalSummary";
import Footer from "@/components/Footer";
import { habits } from "@/data/habits";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <Hero />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[250px_1fr] lg:px-8">
        <HabitNavigation habits={habits} />
        <div className="space-y-16">
          {habits.map((habit) => (
            <PerformanceHabitComparison key={habit.id} {...habit} />
          ))}
          <FinalSummary habits={habits} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
