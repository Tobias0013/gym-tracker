import { ThemeToggle } from "../theme-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function TopAppBar({ children }: Props) {
  return (
    <div className="w-full h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-between px-4">
      <div>{children || <h1 className="text-xl font-bold">Temp</h1>}</div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
