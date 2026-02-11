import { useState } from "react";
import { motion } from "framer-motion";
import DealerInfo from "./DealerInfo";
import FeaturesAndSpecs from "./FeaturesAndSpecs";
import PaymentOption from "./PaymentOption";

function Details({ car }) {
  const [currentTab, setCurrentTab] = useState(
    "features & specs",
  );

  return (
    <>
      <div
        className="flex justify-between items-center gap-2 sm:gap-0 text-base border-b 
      border-gray-400"
      >
        <button
          onClick={() => setCurrentTab("features & specs")}
          className={`relative pb-4  ${currentTab === "features & specs" ? "text-primary font-bold" : "text-gray-400 font-semibold"}`}
        >
          Features & Specs
          {currentTab === "features & specs" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
              }}
            />
          )}
        </button>
        <button
          onClick={() => setCurrentTab("dealer info")}
          className={`relative pb-4 ${currentTab === "dealer info" ? "text-primary font-bold" : "text-gray-400 font-semibold"}`}
        >
          Dealer Info
          {currentTab === "dealer info" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </button>
        <button
          onClick={() => setCurrentTab("payment options")}
          className={`relative pb-4 ${currentTab === "payment options" ? "text-primary font-bold" : "text-gray-400 font-semibold"}`}
        >
          Payment Options
          {currentTab === "payment options" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </button>
      </div>
      <div className="w-full ">
        {currentTab === "features & specs" && (
          <FeaturesAndSpecs car={car} />
        )}

        {currentTab === "dealer info" && <DealerInfo />}

        {currentTab === "payment options" && (
          <PaymentOption />
        )}
      </div>
    </>
  );
}

export default Details;
