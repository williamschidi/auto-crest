import CallToAction from "../components/homePageComponents/CallToAction";
import FeaturedCars from "../components/homePageComponents/FeaturedCars";
import HeroSection from "../components/homePageComponents/HeroSection";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";

function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCars />
      <CallToAction />
    </>
  );
}

export default Home;
