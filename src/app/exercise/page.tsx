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
import { useRouter } from "next/navigation";

export default function ExercisePage() {
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(-1);
  const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
  const [selectedReps, setSelectedReps] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"track" | "history" | "stats">(
    "track",
  );
  const router = useRouter();
  const store = useWorkoutStore();
  const exercise = store.getSelectedExercise();
  const exerciseId = exercise!.exerciseId;

  //Check type safety of exercise and exerciseId, if not valid, return to main page
  if (
    !exercise ||
    exercise === null ||
    exerciseId === null ||
    store.workout === null
  ) {
    router.push("/");
    return;
  }

  const handleSelectSet = (index: number) => {
    if (selectedSetIndex === index) {
      setSelectedSetIndex(-1);
      return;
    }
    setSelectedSetIndex(index);

    setSelectedWeight(exercise.sets[index].weight || null);
    setSelectedReps(exercise.sets[index].reps || null);
  };

  const onSave = () => {
    if (selectedSetIndex === -1) {
      saveNewSet();
    } else {
      updateSet();
    }
  };

  const saveNewSet = () => {
    const nofSets = exercise.sets.length || 0;

    store.addSet(exerciseId, {
      index: nofSets,
      weight: selectedWeight || 0,
      reps: selectedReps || 0,
    });
    setSelectedWeight(null);
    setSelectedReps(null);
  };

  const updateSet = () => {
    store.updateSet(exerciseId, selectedSetIndex, {
      index: selectedSetIndex,
      weight: selectedWeight || 0,
      reps: selectedReps || 0,
    });
    setSelectedSetIndex(-1);
    setSelectedWeight(null);
    setSelectedReps(null);
  };

  const onDelete = () => {
    if (selectedSetIndex === -1) return;

    store.deleteSet(exerciseId, selectedSetIndex);
    setSelectedSetIndex(-1);
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
          sets={exercise.sets || []}
          title="Sets"
          isEditable={true}
          selectedIndex={selectedSetIndex}
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
          isEditing={selectedSetIndex >= 0}
        />
      </div>
      <div>
        <FinishButton onFinish={() => {}} />
      </div>
    </>
  );
}
