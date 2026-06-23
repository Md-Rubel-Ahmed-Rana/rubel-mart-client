import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border bg-card p-10 text-center">
          <h2 className="text-3xl font-bold">Stay Updated</h2>

          <p className="mt-3 text-muted-foreground">
            Subscribe to get exclusive deals, product launches, and shopping
            tips.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Input placeholder="Enter your email" className="h-12" />

            <Button className="h-12 px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
