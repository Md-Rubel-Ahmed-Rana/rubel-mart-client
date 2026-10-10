import Link from "next/link";
import { ArrowRight, Shapes } from "lucide-react";

const CategoriesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-12 text-center sm:py-16">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
        <Shapes className="size-7 text-primary" />
      </div>

      <h2 className="text-xl font-semibold">Categories coming soon</h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We&apos;re preparing our collections for you. In the meantime, explore
        our available products.
      </p>

      <Link
        href="/products"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
      >
        Explore products
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
};

export default CategoriesEmpty;
