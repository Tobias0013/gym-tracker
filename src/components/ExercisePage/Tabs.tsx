"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

type TabsProps = {
  activeTab: "track" | "history" | "stats";
  onTabChange: (tab: "track" | "history" | "stats") => void;
};

// ${
//       activeTab === tab
//         ? "bg-primary text-accent"
//         : "bg-muted text-muted-foreground"
//     }

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabStyle = (tab: string) => `w-32 h-12 text-xl `;

  return (
    <ButtonGroup className="w-full h-full flex justify-center items-center mt-1 mb-1">
      <Button
        size="lg"
        className={tabStyle("track")}
        onClick={() => onTabChange("track")}
        variant={activeTab === "track" ? "secondary" : "outline"}
      >
        Track
      </Button>

      <Button
        size="lg"
        className={tabStyle("history")}
        onClick={() => onTabChange("history")}
        variant={activeTab === "history" ? "secondary" : "outline"}
      >
        History
      </Button>

      <Button
        size="lg"
        className={tabStyle("stats")}
        onClick={() => onTabChange("stats")}
        variant={activeTab === "stats" ? "secondary" : "outline"}
      >
        Stats
      </Button>
    </ButtonGroup>
  );
}
