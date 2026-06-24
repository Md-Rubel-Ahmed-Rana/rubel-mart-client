"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { usePwaInstall } from "../hooks/usePwaInstall";

type Props = {
  variant?: "default" | "outline" | "secondary";
  className?: string;
};

const DownloadAppButton = ({ variant = "default", className }: Props) => {
  const { canInstall, installApp } = usePwaInstall();

  if (!canInstall) return null;

  return (
    <Button
      onClick={installApp}
      variant={variant}
      className={`gap-2 font-medium ${className}`}
    >
      <Download size={18} />
      <span className="text-xs lg:text-lg">Download App</span>
    </Button>
  );
};

export default DownloadAppButton;
