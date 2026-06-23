import { Laptop, Shirt, Home, Watch, Dumbbell, Smartphone } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
  },
  {
    name: "Fashion",
    icon: Shirt,
  },
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Watches",
    icon: Watch,
  },
  {
    name: "Sports",
    icon: Dumbbell,
  },
  {
    name: "Mobiles",
    icon: Smartphone,
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Shop By Category
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <Icon className="mb-4 h-10 w-10 text-primary" />

                <h3 className="font-semibold">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
