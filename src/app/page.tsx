"use client";

import Calendar from "@/components/WeekCalendar";
import TopAppBar from "@/components/TopAppBar";
import { Separator } from "@/components/ui/separator";
import WorkoutSection from "@/components/WorkoutSection";
import AddWorkoutButton from "@/components/AddWorkoutFAB";
import DayInfo from "@/components/DayInfo";

export default function Home() {
  return (
    <>
      <div className=" h-dvh flex flex-col">
        <div className="h-16 mb-4">
          <TopAppBar />
        </div>

        <div className="h-24">
          <Calendar />
        </div>

        <div className="h-6-1px">
          <Separator className="mt-3 mb-3 bg-foreground/25" />
        </div>

        <div className="h-11">
          <DayInfo />
        </div>

        <div className="h-6-1px">
          <Separator className="mt-3 mb-3 bg-foreground/25" />
        </div>

        <div className="grow overflow-y-auto">
          <WorkoutSection />
        </div>
      </div>
      <AddWorkoutButton />
    </>
  );
}
