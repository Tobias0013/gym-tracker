"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Plus, Minus } from "lucide-react";

type Props = {
  weight: number | null;
  reps: number | null;
  onWeightChange: (value: number | null) => void;
  onRepsChange: (value: number | null) => void;

  onSave: () => void;
  onDelete: () => void;

  isEditing: boolean;
};

export default function SetInputControls({
  weight,
  reps,
  onWeightChange,
  onRepsChange,
  onSave,
  onDelete,
  isEditing,
}: Props) {
  const handleDecrement = (nmr: number | null) =>
    Math.max(0, nmr ? nmr - 1 : 0);
  const handleIncrement = (nmr: number | null) => (nmr ? nmr + 1 : 1);

  return (
    <div className="px-4 py-3 space-y-4">
      {inputControls({
        label: "Weight",
        value: weight,
        onDecrement: () => onWeightChange(handleDecrement(weight)),
        onIncrement: () => onWeightChange(handleIncrement(weight)),
        onChange: onWeightChange,
      })}

      {inputControls({
        label: "Reps",
        value: reps,
        onDecrement: () => onRepsChange(handleDecrement(reps)),
        onIncrement: () => onRepsChange(handleIncrement(reps)),
        onChange: onRepsChange,
      })}

      {/* Buttons */}
      <div className="flex gap-2">
        <Button
          disabled={!isEditing}
          onClick={onDelete}
          className="flex-1 py-2 bg-red-500 text-white disabled:opacity-40"
        >
          Delete
        </Button>

        <Button onClick={onSave} className="flex-1 py-2 bg-primary text-white">
          {isEditing ? "Update" : "Save"}
        </Button>
      </div>
    </div>
  );
}

function inputControls({
  label,
  value,
  onDecrement,
  onIncrement,
  onChange,
}: {
  label: string;
  value: number | null;
  onDecrement: () => void;
  onIncrement: () => void;
  onChange: (value: number | null) => void;
}) {
  return (
    <div>
      <p className="text-xl font-semibold text-muted-foreground mb-1">
        {label}
      </p>
      <Separator className="mb-2 bg-muted-foreground ml-auto mr-auto" />

      <div className="flex items-center justify-center gap-2 rounded-md p-2">
        <Button size="icon-lg" onClick={onDecrement}>
          <Minus className="size-5" />
        </Button>

        <Input
          type="number"
          value={value != null ? value.toString() : ""}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            const newValue =
              e.target.value === "" ? null : Number(e.target.value);
            onChange(newValue);
          }}
          className="text-xl h-10 w-20 text-center bg-transparent outline-none"
        />

        <Button size="icon-lg" onClick={onIncrement}>
          <Plus className="size-5" />
        </Button>
      </div>
    </div>
  );
}
