import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function DealerInfo() {
  return (
    <motion.section
      className="mt-12 max-w-xl"
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 ">
        Dealer Info
      </h2>

      {/* Dealer name */}
      <h3 className="text-lg font-semibold text-primary mb-3">
        AutoCreast Motors
      </h3>

      {/* Address */}
      <div className="flex items-center gap-2 text-gray-500 mb-8">
        <Icon
          icon="mdi:map-marker-outline"
          width="18"
          height="18"
        />
        <p className="text-sm">
          342 cresent Avenue, Second Drive New Haven, Enugu
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-between items-center gap-4">
        <button
          className="
          group
          w-1/2
          bg-primary
          hover:bg-primary/90
          hover:scale-[1.01]
          transition
          rounded-full
          py-2
          flex
          items-center
          justify-center
          gap-3
          font-semibold
          text-base
          text-black
        "
        >
          <Icon
            icon="fluent:chat-28-regular"
            width="24"
            height="24"
            className="text-neutral"
          />
          <span className="text-neutral">Start Chat</span>
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral group-hover:translate-x-4 transition-all">
            <Icon
              icon="mdi:arrow-right"
              width="16"
              height="16"
              className="text-neutral"
            />
          </span>
        </button>
        <button
          className="
          group
          w-1/2
          border border-primary
          hover:bg-primary/5
          hover:scale-[1.01]
          transition
          rounded-full
          py-2
          flex
          items-center
          justify-center
          gap-3
          font-semibold
          text-base
         group
        "
        >
          <Icon
            icon="solar:phone-outline"
            width="24"
            height="24"
            className="text-primary"
          />
          <span className=" text-primary ">
            Contact Dealer
          </span>
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-primary group-hover:translate-x-4 transition-all">
            <Icon
              icon="mdi:arrow-right"
              width="16"
              height="16"
              className="text-primary"
            />
          </span>
        </button>
      </div>
    </motion.section>
  );
}

export default DealerInfo;
