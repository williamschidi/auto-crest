import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const CarCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative">
        <img
          src={data.images[0]}
          alt={data.model}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />

        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-neutral bg-accent font-bold text-sm">
          ${data.price.toLocaleString()}
        </span>
      </div>

      <div className="px-4 py-6 bg-neutral flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-secondary">
          {data.name} - {data.model}
        </h3>

        <p className="text-sm mt-2 text-gray-600">
          Mileage: {data.millage} MPG
        </p>

        <div className="mt-auto ">
          <Link
            to={`cars/${data.id}`}
            className="mt-4 w-full py-2 rounded-lg font-semibold text-neutral hover:text-neutral/90 bg-primary hover:bg-primary/90 inline-flex gap-4 justify-center items-center group "
          >
            <span>View Details</span>{" "}
            <Icon
              icon="gg:arrow-right-o"
              width="20"
              height="20"
              className="group-hover:translate-x-2 transition-transform duration-300 ease-out"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
