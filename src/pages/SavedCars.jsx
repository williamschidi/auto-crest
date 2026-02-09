import { useContext, useState } from "react";
import { SavedCarsContext } from "../components/CarDetailsComponents/SavedCarsContext";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import carDetails from "../components/homePageComponents/FeatureCarData";

function SavedCars() {
  const [sortBy, setSortBy] = useState("");
  const { savedCars } = useContext(SavedCarsContext);
  const navigate = useNavigate();

  const cars = carDetails.filter((carDetail) =>
    savedCars.includes(carDetail.id),
  );

  if (cars.length === 0) {
    return (
      <div className="text-center py-10">
        <Icon
          icon="mdi:car-off"
          width={50}
          height={50}
          className="mx-auto mb-4"
        />
        <p className="text-lg mb-2 font-semibold">
          No saved cars yet
        </p>
        <p className="text-gray-500 mb-4">
          Tap the heart icon on the car to save it for
          later.
        </p>
        <button
          onClick={() => navigate("/#features")}
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Browse Cars
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-8">
        <p className="font-semibold text-sm">
          saved cars ({savedCars?.length})
        </p>

        <select
          name=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md text-xs font-semibold px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Sort </option>
          <option value="brand">Brand </option>
          <option value="price">Price </option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className=" rounded-xl overflow-hidden bg-white border shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-50 overflow-hidden">
              <img
                src={car.images[0]}
                alt="Toyota Camry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Condition badge */}
              <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                {car.condition}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold tracking-wide">
                  {car.brand} {car.model}
                </h3>
                <span className="text-primary text-xs font-medium">
                  {car.year}
                </span>
              </div>

              {/* Price */}
              <p className="text-primary text-lg font-bold">
                ${car.price}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon
                    icon="fluent-emoji-flat:fuel-pump"
                    width="14"
                    height="14"
                  />
                  <span>{car.fuelType}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="ep:setting"
                    width="14"
                    height="14"
                  />
                  <span>{car.transmission}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="game-icons:measure-tape"
                    width="14"
                    height="14"
                  />
                  <span>{car.mileage} km</span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="streamline-ultimate:car-3-bold"
                    width="14"
                    height="14"
                  />
                  <span>{car.bodyType}</span>
                </div>
              </div>

              {/* CTA */}
              <NavLink
                to={`/cars/${car.id}`}
                className="block text-center text-sm font-semibold text-white bg-primary rounded-full py-2 hover:bg-primary/90 transition"
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
