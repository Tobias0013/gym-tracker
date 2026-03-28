import { create } from "zustand";

type Set = {
  // setId: string;
  index: number;
  weight: number;
  reps: number;
};

type WorkoutExercise = {
  exerciseId: string;
  name: string;
  sets: Set[];
};

//TODO: add once database is implemented
type Workout = {
  // workoutId: string;
  date: string;
  // userId: string;
  exercises: WorkoutExercise[];
};

type WorkoutState = {
  workout: Workout | null;
  selectedExerciseId: string | null;

  setSelectedExercise: (exerciseId: string | null) => void;
  getSelectedExercise: () => WorkoutExercise | null;

  startWorkout: (date: string) => void;
  addExercise: (exercise: WorkoutExercise) => void;

  addSet: (exerciseId: string, set: Set) => void;
  updateSet: (exerciseId: string, setIndex: number, set: Set) => void;
  deleteSet: (exerciseId: string, setIndex: number) => void;
};

const func = (param1: any) => {
  console.log("test", param1);
};

export const useWorkoutStore = create<WorkoutState>((set) => ({
  workout: null,
  selectedExerciseId: null,

  setSelectedExercise: (exerciseId) =>
    set({
      selectedExerciseId: exerciseId,
    }),

  getSelectedExercise: () =>{
    const store: WorkoutState = useWorkoutStore.getState()
    if (!store.workout || !store.selectedExerciseId) return null;

    return store.workout.exercises.find(
      (ex) => ex.exerciseId === store.selectedExerciseId,
    ) || null;
  },

  startWorkout: (date) =>
    set({
      workout: {
        date,
        exercises: [],
      },
    }),

  addExercise: (exercise) =>
    set((state) => ({
      workout: state.workout
        ? {
            ...state.workout,
            exercises: [...state.workout.exercises, exercise],
          }
        : null,
    })),

  addSet: (exerciseId, newSet) =>
    set((state) => {
      if (!state.workout) return {};

      return {
        workout: {
          ...state.workout,
          exercises: state.workout.exercises.map((ex) =>
            ex.exerciseId === exerciseId
              ? { ...ex, sets: [...ex.sets, newSet] }
              : ex,
          ),
        },
      };
    }),

  updateSet: (exerciseId, setIndex, updatedSet) =>
    set((state) => {
      if (!state.workout) return {};

      return {
        workout: {
          ...state.workout,
          exercises: state.workout.exercises.map((ex) =>
            ex.exerciseId === exerciseId
              ? {
                  ...ex,
                  sets: ex.sets.map((s, i) =>
                    i === setIndex ? updatedSet : s,
                  ),
                }
              : ex,
          ),
        },
      };
    }),

  deleteSet: (exerciseId, setIndex) =>
    set((state) => {
      if (!state.workout) return {};

      return {
        workout: {
          ...state.workout,
          exercises: state.workout.exercises.map((ex) =>
            ex.exerciseId === exerciseId
              ? {
                  ...ex,
                  sets: ex.sets.filter((_, i) => i !== setIndex),
                }
              : ex,
          ),
        },
      };
    }),
}));
