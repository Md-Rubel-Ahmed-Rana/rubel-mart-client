import Link from "next/link";
import { Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/10 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute right-10 bottom-20 h-72 w-72 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="from-primary to-accent bg-linear-to-r bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base md:text-lg">
          Sorry, the page you&apos;re looking for doesn&apos;t exist, has been
          moved, or the URL may be incorrect.
        </p>

        {/* Brand Badge */}
        <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 shadow-sm">
          <span className="text-primary font-semibold">Rubel Mart</span>
          <span className="text-muted-foreground ml-2 text-sm">
            E-Commerce Platform
          </span>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/products">
              <Search className="mr-2 h-4 w-4" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
