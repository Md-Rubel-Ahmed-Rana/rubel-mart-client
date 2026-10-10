"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BrandCard from "./BrandCard";
import { IBrand } from "@/types/brand.type";

type Props = {
  brands: IBrand[];
};

const BrandsList = ({ brands }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const element = scrollRef.current;

    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 2);
    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2,
    );
  }, []);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    updateScrollButtons();

    const observer = new ResizeObserver(updateScrollButtons);
    observer.observe(element);

    return () => observer.disconnect();
  }, [updateScrollButtons, brands.length]);

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({
      left:
        direction === "left"
          ? -element.clientWidth * 0.8
          : element.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 overflow-x-auto scroll-smooth
          snap-x snap-mandatory pb-4
          scrollbar-none [&::-webkit-scrollbar]:hidden
          motion-reduce:scroll-auto"
        aria-label="Popular brands"
      >
        {brands.map((brand) => (
          <div
            key={brand.slug}
            className="w-[calc((100%-1rem)/2)] min-w-[calc((100%-1rem)/2)]
              snap-start sm:w-[calc((100%-2rem)/3)]
              sm:min-w-[calc((100%-2rem)/3)]
              lg:w-[calc((100%-5rem)/6)]
              lg:min-w-[calc((100%-5rem)/6)]"
          >
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll to previous brands"
          className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10
            -translate-y-1/2 items-center justify-center rounded-full
            border border-border bg-background shadow-md transition-colors
            hover:bg-muted focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-ring
            md:flex cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll to next brands"
          className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10
            -translate-y-1/2 items-center justify-center rounded-full
            border border-border bg-background shadow-md transition-colors
            hover:bg-muted focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-ring
            md:flex cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default BrandsList;
