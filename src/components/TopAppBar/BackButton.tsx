"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  size?: number;
};

export default function BackButton({ size = 6 }: BackButtonProps) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <Button variant="outline" className={`size-${size + 2}`} onClick={goBack}>
      <ChevronLeft className={`size-${size}`} />
    </Button>
  );
}
