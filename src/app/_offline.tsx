/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  WifiOff,
  RefreshCw,
  ShoppingBag,
  Package,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-lg overflow-hidden border-border shadow-lg">
        <div className="h-2 bg-linear-to-r from-primary via-primary to-accent" />

        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <WifiOff className="h-10 w-10 text-primary" />
          </div>

          <Image
            src="/logo.png"
            alt="Rubel Mart"
            width={180}
            height={50}
            priority
            className="mx-auto mb-6 h-auto w-auto"
          />

          <h1 className="text-3xl font-bold tracking-tight">
            You&apos;re Offline
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            It looks like your internet connection has been interrupted. Rubel
            Mart needs an active connection to load products, synchronize your
            cart, and complete purchases.
          </p>

          <div className="mt-6 space-y-4 rounded-2xl border bg-muted/40 p-5 text-left">
            <div className="flex items-start gap-3">
              <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm text-muted-foreground">
                Previously visited pages may still be available from cache.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Package className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm text-muted-foreground">
                Product updates, inventory status, and checkout features require
                an active internet connection.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm text-muted-foreground">
                Your cart and account information remain safe and will sync
                automatically once you&apos;re back online.
              </p>
            </div>
          </div>

          <Button
            onClick={handleRetry}
            disabled={isRetrying}
            className="mt-6 h-11 w-full"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isRetrying ? "animate-spin" : ""}`}
            />

            {isOnline ? "Back Online" : "Try Again"}
          </Button>

          <p className="mt-4 text-xs text-muted-foreground">
            Status:{" "}
            <span
              className={
                isOnline
                  ? "font-medium text-green-600"
                  : "font-medium text-destructive"
              }
            >
              {isOnline ? "Connected" : "No Internet Connection"}
            </span>
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default OfflinePage;
