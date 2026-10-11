/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { IBrand } from "@/types/brand.type";
import { useState } from "react";

type Props = {
  brand: IBrand;
};

const BrandCard = ({ brand }: Props) => {
  const [imageError, setImageError] = useState(false);

  const showLogo = Boolean(brand.logo_url) && !imageError;

  return (
    <Link
      href={`/brands/${brand.slug}`}
      aria-label={`Explore products from ${brand.name}`}
      className="group block rounded-2xl outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2"
    >
      <article
        className="flex h-36 min-w-0 flex-col items-center justify-center
          gap-3 rounded-2xl border border-border/70 bg-card p-5
          transition-all duration-300 group-hover:-translate-y-1
          group-hover:border-primary/40
          group-hover:shadow-lg group-hover:shadow-primary/5
          motion-reduce:transform-none motion-reduce:transition-none"
      >
        <div className="flex h-14 w-full items-center justify-center">
          {showLogo ? (
            <img
              src={brand.logo_url!}
              alt={`${brand.name} logo`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-full max-w-full object-contain"
            />
          ) : (
            <span
              className="line-clamp-2 text-center text-lg font-bold
                tracking-tight text-foreground transition-colors
                group-hover:text-primary"
            >
              {brand.name}
            </span>
          )}
        </div>

        <span
          className="line-clamp-1 max-w-full text-sm font-medium
            text-muted-foreground transition-colors
            group-hover:text-primary"
        >
          {brand.name}
        </span>
      </article>
    </Link>
  );
};

export default BrandCard;
