import { Button } from "@/components/ui/button";

export default function FlashSaleSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-linear-to-r from-primary to-accent p-10 text-white">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-2 text-sm">
              Limited Time Offer
            </span>

            <h2 className="text-4xl font-bold">Flash Sale Up To 70% Off</h2>

            <p className="mt-4 text-white/80">
              Don&apos;t miss out on today&apos;s hottest deals. Grab your
              favorite products before they&apos;re gone.
            </p>

            <Button className="mt-6 bg-white text-primary hover:bg-white/90">
              Shop Flash Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
