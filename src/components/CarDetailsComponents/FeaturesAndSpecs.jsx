import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function FeaturesAndSpecs({ car }) {
  const hightlights = [
    {
      icon: "line-md:speedometer-loop",
      label: "Mileage",
      value: car.mileage,
    },
    {
      icon: "material-symbols-light:star-outline",
      label: "Brand",
      value: car.brand,
    },
    {
      icon: "fluent:vehicle-car-48-regular",
      label: "Model",
      value: car.model,
    },
    {
      icon: "bi:fuel-pump",
      label: "Fuel Type",
      value: car.fuelType,
    },
    {
      icon: "line-md:engine",
      label: "Engine",
      value: car.engine,
    },
    {
      icon: "raphael:car",
      label: "Exterior",
      value: car.color,
    },
    {
      icon: "simple-line-icons:calender",
      label: "Year",
      value: car.year,
    },
    {
      icon: "simple-line-icons:calender",
      label: "Transmission",
      value: car.transmission,
    },
  ];

  return (
    <motion.section
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md w-full md:w-[400px] lg:w-[500px]"
    >
      <h2 className="text-xl font-bold pt-4">
        Features & Specs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 py-4">
        {hightlights.map((item, ind) => (
          <motion.div
            key={item.label}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
              delay: ind * 0.08,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Icon
                icon={item.icon}
                width="22"
                height="22"
                className="text-primary"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {item.label}
              </p>
              <p className="text-base font-semibold text-gray-900">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FeaturesAndSpecs;
