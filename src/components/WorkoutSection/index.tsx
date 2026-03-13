import { ScrollArea } from "@/components/ui/scroll-area";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutSection() {
  return (
    <div className="flex flex-col items-center">
      <ScrollArea className="w-full">
        //TODO: change design of scroll bar
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </ScrollArea>
    </div>
  );
}
