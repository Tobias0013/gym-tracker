import Image from "next/image";
import Calendar from "@/components/WeekCalendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <>
      <br />
      <Calendar />
    </>
  );
}
