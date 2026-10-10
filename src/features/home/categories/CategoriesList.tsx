"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ICategory } from "@/types/category.type";
import CategoryCard from "./CategoryCard";
import SectionHeading from "../common/SectionHeading";

interface CategoriesListProps {
  categories: ICategory[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
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

    updateScrollState();

    element.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, categories.length]);

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({
      left:
        direction === "left"
          ? -(element.clientWidth * 0.75)
          : element.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <SectionHeading
          id="categories-heading"
          eyebrow="Find your favorites"
          title="Shop by Category"
          description="Explore our collections and find the perfect products for your everyday needs."
        />

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll categories left"
            className="flex size-10 items-center justify-center rounded-full border bg-background transition-colors cursor-pointer hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll categories right"
            className="flex size-10 items-center justify-center rounded-full border bg-background transition-colors cursor-pointer hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-linear-to-r from-background to-transparent transition-opacity sm:w-10 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          role="region"
          aria-label="Product categories"
          tabIndex={0}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 pt-1 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 scrollbar-none [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-linear-to-l from-background to-transparent transition-opacity sm:w-10 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="mt-2 flex justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll categories left"
          className="flex size-10 items-center justify-center rounded-full border bg-background disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll categories right"
          className="flex size-10 items-center justify-center rounded-full border bg-background disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CategoriesList;
