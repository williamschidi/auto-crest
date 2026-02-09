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
    <section>
      <h1 className="text-3xl font-semibold pt-8">
        Features & Specs
      </h1>

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
    </section>
  );
}

export default FeaturesAndSpecs;
