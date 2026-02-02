import { Icon } from "@iconify/react";
import carData from "./carData";
import Option from "./Option";
import carDetails from "./FeatureCarData";
import { useState } from "react";

const priceRange = [
  { label: "$1000 - $2000", min: 1000, max: 2000 },
  { label: "$2000 - $4000", min: 2000, max: 4000 },
  { label: "$4000 - $8000", min: 4000, max: 8000 },
  { label: "$8000 - $12000", min: 8000, max: 12000 },
  { label: "$12000 - Above", min: 12000 },
];

function SelectOptions() {
  const [vehicle, setVehicle] = useState({
    brand: "",
    model: "",
    mileage: "",
    price: null,
  });

  function handleOnChange(name, value) {
    setVehicle((prev) => ({
      ...prev,
      [name]: value,

      ...(name === "brand" && { model: "" }),
    }));
  }

  const brands = [
    ...new Set(carDetails.map((make) => make.name)),
  ];

  let models;
  let mileage;

  if (vehicle.brand) {
    const carBrand = carDetails.filter(
      (carDetail) => carDetail.name === vehicle.brand,
    );

    models = carBrand.map((car) => car.model);

    if (vehicle.model) {
      const carModel = carDetails.filter(
        (carDetail) => carDetail.model === vehicle.model,
      );

      mileage = carModel.map((car) => car.mileage);
    }
  }

  return (
    <>
      <Option
        options={brands}
        label={"Brand"}
        onchange={handleOnChange}
        name="brand"
        value={vehicle.brand}
      />
      <Option
        options={models}
        label={"Model"}
        onchange={handleOnChange}
        name="model"
        value={vehicle.model}
      />
      <Option
        options={mileage}
        label={"Mileage"}
        onchange={handleOnChange}
        name="mileage"
        value={vehicle.mileage}
      />

      <Option
        options={priceRange}
        label={"Price range"}
        name="price"
        onchange={handleOnChange}
        value={vehicle.price}
      />
      <button className="flex space-x-2 items-center bg-primary px-3 py-2 text-white rounded-md hover:bg-green-700 transition-colors">
        <span className="text-[.6rem] font-semibold">
          SEARCH
        </span>
        <Icon icon="mynaui:search" width="14" height="14" />
      </button>
    </>
  );
}

export default SelectOptions;
