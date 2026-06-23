const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "Dell"];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Popular Brands</h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-28 items-center justify-center rounded-2xl border bg-card text-lg font-semibold transition-all hover:border-primary hover:text-primary"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
