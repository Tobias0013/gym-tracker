import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SetInfo from "../SetInfo";

export default function WorkoutCard() {
  return (
    <Card className="w-19/20 mb-4">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          "DB Chest Press"
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="ml-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <SetInfo key={index} weight={25} reps={10} />
        ))}
      </CardContent>
      {/* <CardFooter>//TODO: maybe add something about personal records</CardFooter> */}
    </Card>
  );
}
