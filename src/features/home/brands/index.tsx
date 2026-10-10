"use client";

import { useGetBrandsQuery } from "@/apis/brand";
import BrandsEmpty from "./BrandsEmpty";
import BrandsError from "./BrandsError";
import BrandsList from "./BrandsList";
import BrandsLoading from "./BrandsLoading";
import SectionHeading from "../common/SectionHeading";

const BrandsSection = () => {
  const { data, isLoading, isError, refetch } = useGetBrandsQuery();

  const brands = data?.data?.brands ?? [];

  return (
    <section
      aria-labelledby="popular-brands-heading"
      className="overflow-hidden bg-muted/30 py-14 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-360 px-4 flex flex-col gap-4">
        <SectionHeading
          id="brands-heading"
          eyebrow="Trusted brands"
          title="Shop by Brand"
          description="Discover your favorite brands and explore quality products from the names you trust."
        />

        {isLoading ? (
          <BrandsLoading />
        ) : isError ? (
          <BrandsError onRetry={() => void refetch()} />
        ) : brands.length === 0 ? (
          <BrandsEmpty />
        ) : (
          <BrandsList brands={brands} />
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
