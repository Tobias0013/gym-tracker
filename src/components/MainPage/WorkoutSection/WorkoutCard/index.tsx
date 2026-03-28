import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SetInfo from "../SetInfo";

type SetData = {
  index: number;
  weight: number;
  reps: number;
};

type workoutCardProps = {
  id: string;
  name: string;
  sets: SetData[];
  handleClick: (id: string) => void;
};

export default function WorkoutCard({
  id,
  name,
  sets,
  handleClick,
}: workoutCardProps) {
  return (
    <Card className="w-19/20 mb-4" onClick={() => handleClick(id)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="ml-6">
        {sets.length > 0 &&
          sets.map((set, index) => (
            <SetInfo key={index} weight={set.weight} reps={set.reps} />
          ))}
      </CardContent>
      {/* <CardFooter>//TODO: maybe add something about personal records</CardFooter> */}
    </Card>
  );
}
