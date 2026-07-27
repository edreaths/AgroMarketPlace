import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashDeals from "@/components/home/FlashDeals";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FlashDeals />
      <FeaturedVendors />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Newsletter />
      <CallToAction />
      <Footer />
    </>
  );
}