import { ThemeToggle } from "../theme-toggle";

export default function TopAppBar() {
  return (
    <div className="w-full h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">Temp</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
