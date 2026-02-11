import { useContext, useMemo, useState } from "react";
import { SavedCarsContext } from "../components/CarDetailsComponents/SavedCarsContext";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import carDetails from "../components/homePageComponents/FeatureCarData";

function SavedCars() {
  const [sortBy, setSortBy] = useState("");
  const { savedCars } = useContext(SavedCarsContext);
  const navigate = useNavigate();

  // Filter saved cars
  const cars = useMemo(() => {
    return carDetails.filter((car) =>
      savedCars.includes(car.id),
    );
  }, [savedCars]);

  // Sort cars
  const sortedCars = useMemo(() => {
    const list = [...cars];

    if (sortBy === "price") {
      return list.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "brand") {
      return list.sort((a, b) =>
        a.brand.localeCompare(b.brand),
      );
    }

    return list;
  }, [cars, sortBy]);

  // Empty state
  if (cars.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <Icon
          icon="mdi:car-off"
          width={56}
          height={56}
          className="text-gray-400 mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">
          No saved cars yet
        </h2>
        <p className="text-gray-500 mb-6 max-w-sm">
          Tap the heart icon on any car to save it and
          review it later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Browse Cars
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-6 bg-primary rounded-full" />
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Saved Cars
          </h1>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Cars you’ve saved for later viewing
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm font-semibold">
          {cars.length} saved
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md text-xs font-semibold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Sort by</option>
          <option value="brand">Brand</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-12">
        {sortedCars.map((car) => (
          <div
            key={car.id}
            className="flex flex-col bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 md:h-60 overflow-hidden">
              <img
                src={car.images[0].replace(
                  /^public\//,
                  "/",
                )}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                {car.condition}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">
                  {car.brand} {car.model}
                </h3>
                <span className="text-primary text-xs font-medium">
                  {car.year}
                </span>
              </div>

              <p className="text-primary text-lg font-bold">
                ${car.price.toLocaleString()}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon
                    icon="fluent-emoji-flat:fuel-pump"
                    width={14}
                  />
                  <span>{car.fuelType}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon icon="ep:setting" width={14} />
                  <span>{car.transmission}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="game-icons:measure-tape"
                    width={14}
                  />
                  <span>{car.mileage} km</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="streamline-ultimate:car-3-bold"
                    width={14}
                  />
                  <span>{car.bodyType}</span>
                </div>
              </div>

              {/* CTA */}
              <NavLink
                to={`/cars/${car.id}`}
                className="mt-auto text-center bg-primary text-white rounded-full py-2 text-sm font-semibold hover:bg-primary/90 transition hover:scale-[1.02] active:scale-95"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedCars;
