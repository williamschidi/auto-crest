import { Listbox } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Option({ options, name, value, onchange }) {
  return (
    <Listbox
      value={value}
      onChange={(val) => onchange(name, val)}
      name={name}
    >
      <div className="relative ">
        <Listbox.Button className="flex justify-between items-center w-full  px-3 py-2 rounded-md text-sm font-semibold text-left">
          {value?.label || value || name}
          <Icon
            icon="ri:arrow-drop-down-line"
            width="20"
            height="20"
          />
        </Listbox.Button>

        <Listbox.Options className="absolute bottom-full mb-1 w-full min-w-[120px] bg-white shadow-lg rounded-md overflow-hidden ">
          {options?.map((brand, ind) => (
            <Listbox.Option
              key={ind}
              value={brand}
              className={({ active }) =>
                ` px-2 py-2 text-sm cursor-pointer ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-gray-900"
                }`
              }
            >
              {brand.label || brand || name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default Option;
