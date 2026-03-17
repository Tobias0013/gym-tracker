"use client";

import SetRow from "./SetRow";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ButtonGroup } from "@/components/ui/button-group";

type SetData = {
  index: number;
  weight: number;
  reps: number;
};

type SetListProps = {
  sets: SetData[];
  title?: string;
  isEditable?: boolean;
  selectedIndex?: number;
  onSelectSet?: (index: number) => void;
  maxHeight?: string;
};

export default function SetList({
  sets,
  title,
  isEditable = false,
  selectedIndex,
  onSelectSet,
}: SetListProps) {
  return (
    <ScrollArea className="h-full px-1 items-center">
      {title && <p className="text-xl font-semibold mb-1 ml-[2.5%]">{title}</p>}
      <Separator className="mb-2 bg-foreground/50 w-[97.5%]! ml-auto mr-auto" />
      <ButtonGroup orientation="vertical" className="w-full">
        {sets.map((set, index) => (
          <SetRow
            key={index}
            index={index}
            weight={set.weight}
            reps={set.reps}
            isEditable={isEditable}
            isSelected={selectedIndex === index}
            onSelect={onSelectSet}
          />
        ))}
      </ButtonGroup>
    </ScrollArea>
  );
}
