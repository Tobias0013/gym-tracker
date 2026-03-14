import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutSection() {
  return (
    <ScrollArea className="w-full">
      <div className="flex flex-col items-center">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
    </ScrollArea>
  );
}
