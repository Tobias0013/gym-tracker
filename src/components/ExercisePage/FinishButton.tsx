"use client";

import { Button } from "../ui/button";

type Props = {
  onFinish: () => void;
};

export default function FinishButton({ onFinish }: Props) {
  return (
    <div className="sticky bottom-0 p-4 bg-background border-t">
      <Button
        onClick={onFinish}
        className="w-full bg-green-600 text-white font-semibold"
      >
        Finish Exercise
      </Button>
    </div>
  );
}
