"use client";

import Calendar from "@/components/MainPage/WeekCalendar";
import TopAppBar from "@/components/TopAppBar";
import { Separator } from "@/components/ui/separator";
import WorkoutSection from "@/components/MainPage/WorkoutSection";
import AddWorkoutButton from "@/components/MainPage/AddWorkoutFAB";
import DayInfo from "@/components/MainPage/DayInfo";
import Header from "@/components/TopAppBar/Header";
import { useDateText } from "@/store/dateStore";

export default function Home() {
  return (
    <>
      <div className="h-16">
        <TopAppBar>
          <Header title={useDateText()} backButton={false} />
        </TopAppBar>
      </div>

      <div className="h-24 mt-4">
        <Calendar />
      </div>

      <div className="h-6-1px">
        <Separator className="mt-3 mb-3 bg-foreground/25" />
      </div>

      {/* TODO: Proablably remove since info is available in top bar*/}
      <div className="h-11">
        <DayInfo />
      </div>

      <div className="h-6-1px">
        <Separator className="mt-3 mb-3 bg-foreground/25" />
      </div>

      <div className="grow overflow-y-auto">
        <WorkoutSection />
      </div>
      <AddWorkoutButton />
    </>
  );
}
