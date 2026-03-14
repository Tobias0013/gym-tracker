"use client";

import { useState } from "react";
import { addDays, startOfWeek, endOfWeek, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Calendar as Cal } from "@/components/ui/calendar";

export default function WeekCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const [currentWeek, setCurrentWeek] = useState(() => {
    const today = new Date();
    return {
      start: startOfWeek(today, { weekStartsOn: 1 }),
      end: endOfWeek(today, { weekStartsOn: 1 }),
    };
  });

  const changeWeek = (previous: boolean) => {
    const modifier = previous ? -1 : 1;
    setCurrentWeek({
      start: addDays(currentWeek.start, 7 * modifier),
      end: addDays(currentWeek.end, 7 * modifier),
    });
  };

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(currentWeek.start, i),
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Button
          variant="ghost"
          onClick={() => changeWeek(true)}
          className="w-25 text-lg"
        >
          <ChevronLeft className="size-5" /> Previous
        </Button>
        <h2 className="text-lg font-semibold">
          {format(currentWeek.start, "MMM d")} -{" "}
          {format(currentWeek.end, "MMM d")}
        </h2>
        <Button
          variant="ghost"
          onClick={() => changeWeek(false)}
          className="w-25 text-lg"
        >
          Next <ChevronRight className="size-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <Button
            variant="ghost"
            key={day.toISOString()}
            className={
              "p-2 text-center cursor-pointer h-[100%]" +
              `
              ${
                day.toDateString() === new Date().toDateString() &&
                day.toDateString() !== selectedDate?.toDateString()
                  ? "bg-muted"
                  : ""
              }
              ${
                selectedDate &&
                day.toDateString() === selectedDate.toDateString()
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            `
            }
            onClick={() => setSelectedDate(day)}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm">{format(day, "EEE")}</span>
              <span className="font-medium">{format(day, "d")}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
