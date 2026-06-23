"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const categories = ["Electronics", "Fashion", "Beauty", "Home", "Sports"];

export default function CategoriesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category}>
            <Link
              href={`/categories/${category.toLowerCase()}`}
              className="px-3 py-2 text-sm hover:text-primary transition-colors"
            >
              {category}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
