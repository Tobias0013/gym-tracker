export default function TopAppBar() {
  return (
    <div className="w-full h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">Temp</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {/* SVG content here */}
          </svg>
        </button>
      </div>
    </div>
  );
}
