"use client";

import BackButton from "./BackButton";

type HeaderProps = {
  title: string;
  backButton?: boolean;
};

export default function TopAppBarHeader({
  title,
  backButton = true,
}: HeaderProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        {backButton && <BackButton />}
        <p className="text-xl">{title}</p>
      </div>
    </>
  );
}
