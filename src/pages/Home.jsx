import { useEffect, useRef, useState } from "react";
import CallToAction from "../components/homePageComponents/CallToAction";
import FeaturedCars from "../components/homePageComponents/FeaturedCars";
import HeroSection from "../components/homePageComponents/HeroSection";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
import Footer from "../globalComponents/Footer";
import { useLocation } from "react-router-dom";

function Home() {
  const featureCarRef = useRef(null);
  const [searchedCars, setSearchedCars] = useState(null);
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
      <HeroSection
        carRef={featureCarRef}
        setSearchedCars={setSearchedCars}
      />
      <WhyChooseUs />
      <FeaturedCars
        id={"features"}
        carRef={featureCarRef}
        searchedCars={searchedCars}
        setSearchCars={setSearchedCars}
      />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
