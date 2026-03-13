import Calendar from "@/components/WeekCalendar";
import TopAppBar from "@/components/TopAppBar";
import { Separator } from "@/components/ui/separator";
import WorkoutSection from "@/components/WorkoutSection";
import AddWorkoutButton from "@/components/AddWorkoutFAB";

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
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">
              TODAY / WEDNESDAY, MARCH 11
            </h1>
          </div>
        </div>
        {/* // TODO: Shuld this stay or is it information overlaod  */}

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
