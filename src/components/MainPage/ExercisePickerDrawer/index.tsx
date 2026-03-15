"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus } from "lucide-react";

const EXERCISES: Record<string, string[]> = {
  Back: ["Pull Up", "Lat Pulldown", "Barbell Row", "Cable Row"],
  Chest: ["Bench Press", "DB Chest Press", "Cable Fly"],
  Biceps: ["Barbell Curl", "Hammer Curl", "Preacher Curl"],
  Abs: ["Crunch", "Leg Raise", "Cable Crunch"],
};

export default function ExercisePickerDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const muscleGroups = Object.keys(EXERCISES);

  const exercises =
    selectedGroup && EXERCISES[selectedGroup]
      ? EXERCISES[selectedGroup].filter((ex) =>
          ex.toLowerCase().includes(search.toLowerCase()),
        )
      : [];

  const handleAddExercise = (exercise: string) => {
    console.log("Add exercise:", exercise);
    // later: add to workout store
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent className="max-h-[85vh] min-h-[50vh]">
        <DrawerHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            {selectedGroup && (
              <Button
                size="icon"
                className="mr-5"
                variant="secondary"
                onClick={() => {
                  setSelectedGroup(null);
                  setSearch("");
                }}
              >
                <ArrowLeft className="size-5" />
              </Button>
            )}

            <DrawerTitle>
              <p className="text-lg m5">
                {selectedGroup ? selectedGroup : "Select Muscle Group"}
              </p>
            </DrawerTitle>
          </div>

          <Button>Add Exercise</Button>
        </DrawerHeader>

        <div className="px-4 pb-2 mb-2">
          <Input
            className="text-lg h-10"
            placeholder="Search exercise..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto px-4 pb-6 space-y-4">
          {!selectedGroup &&
            muscleGroups
              .filter((group) =>
                group.toLowerCase().includes(search.toLowerCase()),
              )
              .map((group) => (
                <Button
                  key={group}
                  variant="outline"
                  className="w-full justify-start text-lg h-10"
                  size="lg"
                  onClick={() => {
                    setSelectedGroup(group);
                    setSearch("");
                  }}
                >
                  {group}
                </Button>
              ))}

          {selectedGroup &&
            exercises.map((exercise) => (
              <Button
                key={exercise}
                variant="outline"
                className="w-full justify-start text-lg h-10"
                size="lg"
                onClick={() => handleAddExercise(exercise)}
              >
                {exercise}
              </Button>
            ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
