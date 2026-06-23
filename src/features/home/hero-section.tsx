import { ArrowRight, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <ShoppingBag className="h-4 w-4" />
              Smart Shopping For Modern Living
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Shop Smarter With <span className="text-primary">Rubel</span>{" "}
              <span className="text-accent">Mart</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Discover quality products, unbeatable deals, and a seamless
              shopping experience built for modern lifestyles.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline">
                Browse Categories
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-muted-foreground">Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">5K+</h3>
                <p className="text-muted-foreground">Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">99%</h3>
                <p className="text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-card p-8 shadow-xl">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20" />

              <div className="mt-6 space-y-4">
                <div className="h-4 rounded bg-muted" />
                <div className="h-4 w-2/3 rounded bg-muted" />
              </div>
            </div>

            <div className="absolute -left-8 top-12 rounded-xl border bg-background p-4 shadow-lg">
              🔥 Flash Sale
            </div>

            <div className="absolute -right-8 bottom-12 rounded-xl border bg-background p-4 shadow-lg">
              🚚 Free Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
