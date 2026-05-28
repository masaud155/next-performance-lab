import Hero from "@/components/Hero";
import AppShell from "@/components/AppShell";
import SectionContainer from "@/components/SectionContainer";
import HabitSection from "@/components/HabitSection";
import FinalSummary from "@/components/FinalSummary";
import ProgressTracker from "@/components/ProgressTracker";
import { habits } from "@/data/habits";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <SectionContainer className="grid gap-8 py-12 lg:py-16 xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-12 lg:space-y-14">
          {habits.map((habit) => (
            <HabitSection key={habit.id} {...habit} />
          ))}
          <FinalSummary habits={habits} />
        </div>
        <ProgressTracker habits={habits} />
      </SectionContainer>
    </AppShell>
  );
}
