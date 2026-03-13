import WorkoutCard from "./WorkoutCard";

export default function WorkoutSection() {
  return (
    <div className="flex flex-col items-center">
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
    </div>
  );
}
