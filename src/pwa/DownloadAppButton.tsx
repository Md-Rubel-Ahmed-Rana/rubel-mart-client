"use client";

import Image from "next/image";
import { usePwaInstall } from "../hooks/usePwaInstall";
import { CheckCircle2 } from "lucide-react";

type Props = {
  className?: string;
};

const DownloadAppButton = ({ className }: Props) => {
  const { canInstall, installApp, isInstalled } = usePwaInstall();

  if (!isInstalled) {
    return (
      <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        bg-muted
        px-5
        py-3
        text-sm
        font-medium
      "
      >
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        Rubel Mart App Installed
      </div>
    );
  }

  if (!canInstall) {
    return null;
  }

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
