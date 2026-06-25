"use client";

import { useEffect, useState } from "react";

let deferredPrompt: any = null;

export const usePwaInstall = () => {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const beforeInstallHandler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
    };

    const appInstalledHandler = () => {
      deferredPrompt = null;
      setCanInstall(false);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);

    window.addEventListener("appinstalled", appInstalledHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);

      window.removeEventListener("appinstalled", appInstalledHandler);
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

  return {
    canInstall,
    installApp,
  };
};
