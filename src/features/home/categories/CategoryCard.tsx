"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Package } from "lucide-react";
import type { ICategory } from "@/types/category.type";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [imageError, setImageError] = useState(false);

  const showImage = Boolean(category.image_url) && !imageError;

  return (
    <Link
      href={`/categories/${category.slug}`}
      aria-label={`Explore ${category.name} products`}
      className="group w-52 shrink-0 rounded-2xl border border-border/70 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-44 sm:p-4"
    >
      <div className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-muted">
        {showImage ? (
          <Image
            src={category.image_url!}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 148px, 176px"
            unoptimized
            onError={() => setImageError(true)}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-primary/5">
            <Package
              aria-hidden="true"
              className="size-10 text-primary/60 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

        <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-background/90 text-foreground opacity-100 shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:opacity-0 sm:group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <h3 className="min-w-0 truncate text-sm font-semibold transition-colors group-hover:text-primary sm:text-base">
          {category.name}
        </h3>

        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </div>

      <p className="mt-1 text-xs text-muted-foreground">Explore collection</p>
    </Link>
  );
};

export default CategoryCard;
