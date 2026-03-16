import { addDays } from "date-fns/addDays";
import { create } from "zustand";

type DateStore = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
}));

export const useDateText = () => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const today = new Date();
  
  if (selectedDate.toDateString() === today.toDateString()) {
    return "TODAY";
  } else if (
    selectedDate.toDateString() === addDays(today, -1).toDateString()
  ) {
    return "YESTERDAY";
  } else if (selectedDate.toDateString() === addDays(today, 1).toDateString()) {
    return "TOMORROW";
  }
  return selectedDate.toDateString();
};
