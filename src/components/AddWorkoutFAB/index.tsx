"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Dumbbell, CalendarPlus } from "lucide-react";

export default function AddWorkoutFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] flex flex-col items-end gap-3">
      {isOpen && (
        <>
          <Button className="rounded-full shadow-md flex gap-2 px-4">
            //TODO make bigger text
            <Dumbbell className="h-4 w-4" />
            Add Exercise
          </Button>

          <Button className="rounded-full shadow-md flex gap-2 px-4">
            <CalendarPlus className="h-4 w-4" />
            Schedule Workout
          </Button>
        </>
      )}

      <Button
        size="icon"
        className="
        rounded-full 
        shadow-lg
        size-16
      "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Plus
          className={`size-auto transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}
          size={24}
        />
      </Button>
    </div>
  );
}
