import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    oldPrice: 249,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 49,
    oldPrice: 79,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 89,
    oldPrice: 129,
    rating: 4.6,
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <Button variant="outline">View All</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl"
            >
              <div className="relative">
                <div className="aspect-square bg-linear-to-br from-primary/10 to-accent/10" />

                <button className="absolute right-3 top-3 rounded-full bg-background p-2 shadow">
                  <Heart className="h-4 w-4" />
                </button>

                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  SALE
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-semibold">{product.name}</h3>

                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{product.rating}</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl font-bold">${product.price}</span>

                  <span className="text-sm text-muted-foreground line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <Button className="mt-4 w-full">Add To Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
