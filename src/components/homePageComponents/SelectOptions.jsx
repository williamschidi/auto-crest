import { Icon } from "@iconify/react";
import carData from "./carData";
import Option from "./Option";

function SelectOptions() {
  return (
    <>
      <Option options={carData.brands} label={"Brand"} />
      <Option options={carData.benzMakes} label={"Make"} />
      <Option options={carData.mileage} label={"Mileage"} />
      <Option
        options={carData.location}
        label={"Location"}
      />
      <Option
        options={carData.type}
        label={"Type of Car"}
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
