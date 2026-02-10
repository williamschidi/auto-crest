import { Icon } from "@iconify/react";
// import carData from "./carData";
import Option from "./Option";
import carDetails from "./FeatureCarData";
import { useState } from "react";
import { useContext } from "react";
import { SearchCars } from "../../globalComponents/SearchCarsContext";

const priceRange = [
  { label: "$1000 - $2000", min: 1000, max: 2000 },
  { label: "$2000 - $4000", min: 2000, max: 4000 },
  { label: "$4000 - $8000", min: 4000, max: 8000 },
  { label: "$8000 - $12000", min: 8000, max: 12000 },
  { label: "$12000 - Above", min: 12000 },
];

const initialState = {
  brand: "",
  model: "",
  mileage: "",
  price: null,
};

function SelectOptions({ handleScroll }) {
  const [vehicle, setVehicle] = useState(initialState);
  const { setSearchCars } = useContext(SearchCars);

  function handleOnChange(name, value) {
    setVehicle((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "brand" && { model: "" }),
    }));
  }

  function handleSearch() {
    if (
      !vehicle.brand &&
      !vehicle.model &&
      !vehicle.mileage &&
      !vehicle.price
    ) {
      return;
    }
    const filteredCar = carDetails.filter((carDetail) => {
      if (
        vehicle.brand &&
        carDetail.brand !== vehicle.brand
      ) {
        return false;
      }
      if (
        vehicle.model &&
        carDetail.model !== vehicle.model
      ) {
        return false;
      }
      if (
        vehicle.mileage &&
        carDetail.mileage !== vehicle.mileage
      ) {
        return false;
      }
      if (vehicle.price) {
        const { min, max } = vehicle.price;
        console.log("min :", min, "max:", max);
        if (min && carDetail.price < min) return false;
        if (max && carDetail.price > max) return false;
      }
      return true;
    });

    setSearchCars(filteredCar);

    handleScroll();
    setVehicle(initialState);
  }

  // select only brands from the array of carDetails
  const brands = [
    ...new Set(carDetails.map((make) => make.brand)),
  ];

  let models;
  let mileage;

  // get model under selected brands
  if (vehicle.brand) {
    const carBrand = carDetails.filter(
      (carDetail) => carDetail.brand === vehicle.brand,
    );

    models = carBrand.map((car) => car.model);
  }

  return (
    <>
      <Option
        options={brands}
        onchange={handleOnChange}
        name="brand"
        value={vehicle.brand}
      />
      <Option
        options={models}
        onchange={handleOnChange}
        name="model"
        value={vehicle.model}
      />
      <Option
        options={mileage}
        onchange={handleOnChange}
        name="mileage"
        value={vehicle.mileage}
      />

      <Option
        options={priceRange}
        name="price"
        onchange={handleOnChange}
        value={vehicle.price}
      />
      <button
        onClick={handleSearch}
        className="flex space-x-2 items-center bg-primary px-3 py-2 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        <span className="text-[.6rem] font-semibold">
          SEARCH
        </span>
        <Icon icon="mynaui:search" width="14" height="14" />
      </button>
    </>
  );
}

export default SelectOptions;
