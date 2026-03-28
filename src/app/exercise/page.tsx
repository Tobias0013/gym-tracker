"use client";

import Header from "@/components/TopAppBar/Header";
import SetList from "@/components/ExercisePage/SetList";
import TopAppBar from "@/components/TopAppBar";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Tabs from "@/components/ExercisePage/Tabs";
import SetInputControls from "@/components/ExercisePage/SetInputControls";
import FinishButton from "@/components/ExercisePage/FinishButton";
import { useWorkoutStore } from "@/store/workoutStore";

const mockSets = [
  { weight: 50, reps: 10 },
  { weight: 55, reps: 8 },
  { weight: 60, reps: 6 },
  { weight: 60.25, reps: 6 },
];

type ExercisePageProps = {
  date: Date;
  exerciseId: string;
};

export default function ExercisePage({date, exerciseId}: ExercisePageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
  const [selectedReps, setSelectedReps] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"track" | "history" | "stats">(
    "track",
  );
  const handleSelectSet = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
      return;
    }
    setSelectedIndex(index);

    setSelectedWeight(store.workout?.exercises[0]?.sets[index].weight || null);
    setSelectedReps(store.workout?.exercises[0]?.sets[index].reps || null);
  };

  const store = useWorkoutStore();

  //TODO: remove
  // Initialize workout and exercise with mock data on component mount
  useEffect(() => {
    store.startWorkout(new Date().toISOString());
    store.addExercise({
      exerciseId: "1",
      name: "DB Chest Press",
      sets: [],
    });
    mockSets.forEach((set, index) => {
      store.addSet("1", { index, weight: set.weight, reps: set.reps });
    });
  }, []);

  const onSave = () => {
    if (selectedIndex === -1) {
      saveNewSet();
    } else {
      updateSet();
    }
  };

  const saveNewSet = () => {
    const nofSets = store.workout?.exercises[0]?.sets.length || 0;

    store.addSet("1", {
      index: nofSets,
      weight: selectedWeight || 0,
      reps: selectedReps || 0,
    });
    setSelectedWeight(null);
    setSelectedReps(null);
  };

  const updateSet = () => {
    store.updateSet("1", selectedIndex, {
      index: selectedIndex,
      weight: selectedWeight || 0,
      reps: selectedReps || 0,
    });
    setSelectedIndex(-1);
    setSelectedWeight(null);
    setSelectedReps(null);
  };

  const onDelete = () => {
    if (selectedIndex === -1) return;

    store.deleteSet("1", selectedIndex);
    setSelectedIndex(-1);
    setSelectedWeight(null);
    setSelectedReps(null);
  };

  return (
    <>
      <div className="h-16">
        <TopAppBar>
          <Header title="DB Chest Press" />
        </TopAppBar>
      </div>
      <div className="h-16">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="h-6-1px">
        <Separator className="mt-3 mb-3 bg-foreground/25" />
      </div>
      <div className="h-64 mb-4">
        <SetList
          sets={store.workout?.exercises[0]?.sets || []}
          title="Sets"
          isEditable={true}
          selectedIndex={selectedIndex}
          onSelectSet={handleSelectSet}
        />
      </div>
      <div>
        <SetInputControls
          weight={selectedWeight}
          reps={selectedReps}
          onWeightChange={setSelectedWeight}
          onRepsChange={setSelectedReps}
          onSave={onSave}
          onDelete={onDelete}
          isEditing={selectedIndex >= 0}
        />
      </div>
      <div>
        <FinishButton onFinish={() => {}} />
      </div>
    </>
  );
}
