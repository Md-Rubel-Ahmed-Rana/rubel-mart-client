import BrandsSection from "./brands-section";
import CategoriesSection from "./categories";
import FeaturedProductsSection from "./featured-products";
import FlashSaleSection from "./flash-sale";
import HeroSection from "./hero-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <FlashSaleSection />
      <BrandsSection />
    </>
  );
};

export default Home;
