"use client";

import { useEffect, useState } from "react";
import InstallAppModal from "./InstallAppModal";
import { usePwaInstall } from "../hooks/usePwaInstall";

const PwaInstallProvider = () => {
  const { canInstall } = usePwaInstall();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!canInstall) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [canInstall]);

  return <InstallAppModal open={open} onOpenChange={setOpen} />;
};

export default PwaInstallProvider;
