"use client";

import { useGetCategoriesQuery } from "@/apis/category";
import CategoriesError from "./CategoriesError";
import CategoriesEmpty from "./CategoriesEmpty";
import CategoriesList from "./CategoriesList";
import CategoriesLoading from "./CategoriesLoading";
import SectionHeading from "../common/SectionHeading";

const CategoriesSection = () => {
  const { data, isLoading, isError, isFetching, refetch } =
    useGetCategoriesQuery();

  const categories = data?.data?.categories ?? [];

  return (
    <section
      aria-labelledby="categories-heading"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4">
        {isLoading ? (
          <>
            <SectionHeading
              id="categories-heading"
              eyebrow="Find your favorites"
              title="Shop by Category"
              description="Explore our collections and find the perfect products for your everyday needs."
            />
            <CategoriesLoading />
          </>
        ) : isError ? (
          <>
            <SectionHeading
              id="categories-heading"
              eyebrow="Find your favorites"
              title="Shop by Category"
              description="Explore our collections and find the perfect products for your everyday needs."
            />
            <CategoriesError
              onRetry={() => void refetch()}
              isRetrying={isFetching}
            />
          </>
        ) : categories.length === 0 ? (
          <>
            <SectionHeading
              id="categories-heading"
              eyebrow="Find your favorites"
              title="Shop by Category"
              description="Explore our collections and find the perfect products for your everyday needs."
            />
            <CategoriesEmpty />
          </>
        ) : (
          <CategoriesList categories={categories} />
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
