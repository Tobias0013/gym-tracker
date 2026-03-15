import { X } from "lucide-react";

type SetInfoProps = {
  weight: number;
  reps: number;
};

export default function SetInfo({ weight, reps }: SetInfoProps) {
  return (
    <div className="flex flex-row justify-baseline gap-2 mb-2">
      <p className="text-xl font-semibold">{weight.toFixed(1)}</p>
      <p className="text-sm self-center text-primary/66">kgs</p>
      <X size={24} className="self-center" />
      <p className="text-xl font-semibold">{reps}</p>
    </div>
  );
}
