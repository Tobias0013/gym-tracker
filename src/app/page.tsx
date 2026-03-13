import Image from "next/image";
import Calendar from "@/components/WeekCalendar";
import { Button } from "@/components/ui/button";
import TopAppBar from "@/components/TopAppBar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <br />
      <Calendar />
      <Separator className="my-6" />
    </>
  );
}
