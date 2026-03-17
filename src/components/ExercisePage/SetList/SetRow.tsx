// src/components/SetRow.tsx
"use client";

import { X } from "lucide-react";

type SetRowProps = {
  index: number;
  weight: number;
  reps: number;
  isSelected?: boolean;
  isEditable?: boolean;
  onSelect?: (index: number) => void;
};

export default function SetRow({
  index,
  weight,
  reps,
  isSelected = false,
  isEditable = false,
  onSelect,
}: SetRowProps) {
  return (
    <div
      className={`flex h-12 justify-between items-center px-8 py-2 rounded-md mb-1 cursor-pointer ${
        isSelected ? "bg-foreground text-accent" : "bg-secondary"
      } ${!isEditable ? "cursor-default" : ""}`}
      onClick={() => {
        if (isEditable && onSelect) onSelect(index);
      }}
    >
      <p className="text-xl font-semibold">{index + 1 + ":"}</p>
      <div className="flex flex-row gap-2">
        <p className="text-xl font-semibold">
          {weight % 1 === 0 ? weight.toFixed(1) : weight.toFixed(2)}
        </p>
        <p className="text-sm self-center text-primary/66">kgs</p>
        {/* TODO: Maby remove */}
        <X size={20} className="self-center text-primary/66" />
        <p className="text-xl font-semibold">{reps}</p>
        <p className="text-sm self-center text-primary/66">reps</p>
      </div>
    </div>
  );
}
