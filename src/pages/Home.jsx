import { useRef } from "react";
import CallToAction from "../components/homePageComponents/CallToAction";
import FeaturedCars from "../components/homePageComponents/FeaturedCars";
import HeroSection from "../components/homePageComponents/HeroSection";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
import Footer from "../globalComponents/Footer";

function Home() {
  const featureCarRef = useRef(null);

  return (
    <>
      <HeroSection carRef={featureCarRef} />
      <WhyChooseUs />
      <FeaturedCars carRef={featureCarRef} />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
