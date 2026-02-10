import { useEffect, useRef } from "react";
import CallToAction from "../components/homePageComponents/CallToAction";
import FeaturedCars from "../components/homePageComponents/FeaturedCars";
import HeroSection from "../components/homePageComponents/HeroSection";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
import { useLocation } from "react-router-dom";

function Home() {
  const featureCarRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const features = document.querySelector(hash);

      if (features) {
        features.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <HeroSection carRef={featureCarRef} />
      <WhyChooseUs />
      <FeaturedCars
        id={"features"}
        carRef={featureCarRef}
      />
      <CallToAction />
    </>
  );
}

export default Home;
