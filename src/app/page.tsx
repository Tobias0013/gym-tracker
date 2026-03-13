import Image from "next/image";
import Calendar from "@/components/WeekCalendar";
import { Button } from "@/components/ui/button";
import TopAppBar from "@/components/TopAppBar";
import { Separator } from "@/components/ui/separator";
import WorkoutSection from "@/components/WorkoutSection";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <br />
      <Calendar />
      <Separator className="mt-6 bg-foreground/25" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-2 mt-2">
          TODAY / WEDNESDAY, MARCH 11
        </h1>
      </div>
      {/* // TODO: Shuld this stay or is it information overlaod  */}
      <Separator className="mb-4 bg-foreground/25" />
      <WorkoutSection />
    </>
  );
}
