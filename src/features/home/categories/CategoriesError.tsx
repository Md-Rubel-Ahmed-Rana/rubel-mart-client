"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

interface CategoriesErrorProps {
  onRetry: () => void;
  isRetrying: boolean;
}

const CategoriesError = ({ onRetry, isRetrying }: CategoriesErrorProps) => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/5 px-6 py-12 text-center sm:py-16"
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="size-7 text-destructive" />
      </div>

      <h2 className="text-xl font-semibold">Unable to load categories</h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        Something went wrong while loading our categories. Please check your
        connection and try again.
      </p>

      <button
        type="button"
        onClick={onRetry}
        disabled={isRetrying}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <RefreshCw className={`size-4 ${isRetrying ? "animate-spin" : ""}`} />
        {isRetrying ? "Retrying..." : "Try again"}
      </button>
    </div>
  );
};

export default CategoriesError;
