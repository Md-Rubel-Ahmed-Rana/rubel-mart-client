"use client";

import Image from "next/image";
import { usePwaInstall } from "../hooks/usePwaInstall";

type Props = {
  className?: string;
};

const DownloadAppButton = ({ className }: Props) => {
  const { canInstall, installApp } = usePwaInstall();

  if (!canInstall) return null;

  return (
    <button
      type="button"
      onClick={installApp}
      aria-label="Install Rubel Mart App"
      className={`
        group
        transition-all
        duration-300
        hover:scale-[1.03]
        active:scale-[0.98]
        cursor-pointer
        ${className}
      `}
    >
      <Image
        src="/icons/app-store-google-play-apple-apple-text-logo.png"
        alt="Download Rubel Mart App"
        width={260}
        height={78}
        priority
        className="
          h-auto
          w-auto
          max-w-55
          rounded-xl
          shadow-lg
          transition-all
          duration-300
          group-hover:shadow-xl
        "
      />
    </button>
  );
};

export default DownloadAppButton;
