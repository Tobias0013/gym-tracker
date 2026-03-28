import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WorkoutCard from "./WorkoutCard";
import { useWorkoutStore } from "@/store/workoutStore";
import { useEffect } from "react";

const mockSets = [
  {
    exercise: "Bench Press",
    sets: [
      { weight: 100, reps: 10 },
      { weight: 100, reps: 9 },
      { weight: 100, reps: 8 },
    ],
  },
  {
    exercise: "Squats",
    sets: [
      { weight: 150, reps: 8 },
      { weight: 140, reps: 7 },
      { weight: 150, reps: 6 },
    ],
  },
  {
    exercise: "Deadlifts",
    sets: [
      { weight: 200, reps: 5 },
      { weight: 220, reps: 5 },
      { weight: 200, reps: 4 },
    ],
  },
];

export default function WorkoutSection() {
  const store = useWorkoutStore();

  //TODO: remove once database is implemented
  useEffect(() => {
    store.startWorkout(new Date().toISOString());

    mockSets.forEach((exercise, index) => {
      store.addExercise({
        exerciseId: exercise.exercise,
        name: exercise.exercise,
        sets: [],
      });
      exercise.sets.forEach((set, setIndex) => {
        store.addSet(exercise.exercise, {
          index: setIndex,
          weight: set.weight,
          reps: set.reps,
        });
      });
    });
  }, []);

  return (
    <ScrollArea className="w-full">
      <div className="flex flex-col items-center">
        {store.workout?.exercises.map((exercise) => (
          <WorkoutCard
            key={exercise.exerciseId}
            name={exercise.name}
            sets={exercise.sets}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
