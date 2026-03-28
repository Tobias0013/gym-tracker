"use client";

import { Info } from "lucide-react";
import { Button } from "../ui/button";

type InfoButtonProps = {
  onClick: () => void;
};

export default function InfoButton({ onClick }: InfoButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={onClick}
      className="p-2 rounded-md hover:bg-muted"
    >
      <Info size={20} />
    </Button>
  );
}
