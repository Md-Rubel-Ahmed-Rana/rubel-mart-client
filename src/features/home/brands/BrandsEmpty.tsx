import { Tag } from "lucide-react";

const BrandsEmpty = () => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl
      border border-dashed border-border bg-card/50 px-6 py-12 text-center"
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center
        rounded-full bg-primary/10 text-primary"
      >
        <Tag className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold">No brands available yet</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        We&apos;re preparing our brand collection. Please check back soon.
      </p>
    </div>
  );
};

export default BrandsEmpty;
