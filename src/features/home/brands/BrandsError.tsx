import { AlertCircle, RefreshCw } from "lucide-react";

type Props = {
  onRetry: () => void;
};

const BrandsError = ({ onRetry }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl
        border border-destructive/20 bg-destructive/5 px-6 py-12 text-center"
      role="alert"
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center
        rounded-full bg-destructive/10 text-destructive"
      >
        <AlertCircle className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold">Unable to load brands</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Something went wrong while loading our brands. Please try again.
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-5 inline-flex items-center gap-2 rounded-lg
          bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground
          transition-opacity hover:opacity-90 focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-ring
          focus-visible:ring-offset-2"
      >
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Try again
      </button>
    </div>
  );
};

export default BrandsError;
