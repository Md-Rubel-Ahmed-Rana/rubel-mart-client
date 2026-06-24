"use client";

import { useEffect, useState } from "react";

let deferredPrompt: any = null;

export const usePwaInstall = () => {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    deferredPrompt = null;
    setCanInstall(false);

    return result;
  };

  return { canInstall, installApp };
};
