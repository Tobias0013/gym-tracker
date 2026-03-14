import { useDateStore } from "@/store/dateStore";
import { addDays } from "date-fns";

/* // TODO: Shuld this stay or is it information overlaod  */
export default function DayInfo() {
  const selectedDate = useDateStore((state) => state.selectedDate);

  const dateText = (selectedDate: Date) => {
    const today = new Date();
    if (selectedDate.toDateString() === today.toDateString()) {
      return "TODAY";
    } else if (
      selectedDate.toDateString() === addDays(today, -1).toDateString()
    ) {
      return "YESTERDAY";
    } else if (
      selectedDate.toDateString() === addDays(today, 1).toDateString()
    ) {
      return "TOMORROW";
    }
    return selectedDate.toDateString();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">{dateText(selectedDate)}</h1>
    </div>
  );
}
