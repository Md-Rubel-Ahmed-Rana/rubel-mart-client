import BrandsSection from "./brands-section";
import CategoriesSection from "./categories-section";
import FeaturedProductsSection from "./featured-products";
import FlashSaleSection from "./flash-sale";
import HeroSection from "./hero-section";
import NewsletterSection from "./newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <FlashSaleSection />
      <BrandsSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
