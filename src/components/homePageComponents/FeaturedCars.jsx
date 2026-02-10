import { useContext, useRef, useState } from "react";
import CarCard from "./CarCard";
import carDetails from "./FeatureCarData";
import { SearchCars } from "../../globalComponents/SearchCarsContext";

function FeaturedCars({ carRef, id }) {
  const [showAll, setShowAll] = useState(false);
  const { searchCars, setSearchCars } =
    useContext(SearchCars);
  const collectionRef = useRef();

  function showAllCars() {
    setShowAll((prev) => !prev);
    setSearchCars(null);
    collectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setSearchCars("");
  }

  const inStockedCars = showAll
    ? carDetails
    : carDetails.slice(0, 8);

  const visibleCars = searchCars
    ? carDetails.filter((car) =>
        `${car.brand}`
          .toLowerCase()
          .includes(searchCars.toLowerCase()),
      )
    : inStockedCars;

  return (
    <section
      ref={carRef}
      className="py-12 px-8 md:px-16 bg-white"
      id={id}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-accent rounded-full"></div>
      </div>

      <h2
        ref={collectionRef}
        className="text-4xl md:text-5xl font-extrabold py-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Explore Our Collections
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {visibleCars.map((data) => (
          <CarCard data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          onClick={showAllCars}
        >
          Show {showAll ? "less" : "all"} cars
        </button>
      </div>
    </section>
  );
}

export default FeaturedCars;
