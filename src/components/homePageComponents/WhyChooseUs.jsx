import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const whyChooseUsData = [
  {
    id: 1,
    title: "Trusted Dealer",
    description:
      "We are a trusted and verified car dealer with a proven track record of delivering quality vehicles and honest transactions.",
    image: "/images/trust-3.webp",
  },
  {
    id: 2,
    title: "Affordable Price",
    description:
      "Our cars are priced competitively to give you the best value for your money.",
    image: "/images/affordable-001.jpeg",
  },
  {
    id: 3,
    title: "Flexible Payment",
    description:
      "Flexible payment options that fit your budget and lifestyle.",
    image: "/images/flexible.jpeg",
  },
  {
    id: 4,
    title: "After Sales Support",
    description:
      "Reliable after-sales support to keep you confident long after purchase.",
    image: "/images/support.webp",
  },
];

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-16 bg-neutral">
      <h2 className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-tr from-primary to-accent">
        Why Choose Us
      </h2>

      {/* Tabs */}
      <div className="relative flex justify-center gap-10 border-b border-gray-400 mb-14 overflow-x-auto max-w-2xl mx-auto">
        {whyChooseUsData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`relative pb-4 text-sm transition-colors whitespace-nowrap ${
              activeIndex === index
                ? "text-secondary font-semibold"
                : "text-gray-400 hover:text-secondary"
            }`}
          >
            {item.title}

            {/* Animated Underline */}
            {activeIndex === index && (
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
        ))}
      </div>

      <div className="relative grid md:grid-cols-2 items-stretch max-w-5xl mx-auto border border-primary rounded-2xl">
        <div
          className="absolute inset-0 z-10 filter blur-sm bg-center bg-cover"
          style={{
            backgroundImage: `url(./${whyChooseUsData[activeIndex].image})`,
          }}
        ></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="rounded-t-xl md:rounded-tr-[0] md:rounded-l-xl  h-full flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={whyChooseUsData[activeIndex].image}
              alt={whyChooseUsData[activeIndex].title}
              className="w-full h-full object-contain rounded-t-xl md:rounded-tr-[0] md:rounded-l-xl "
            />
          </motion.div>

          <motion.div
            key={"text-" + activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/95 w-full h-full px-4 sm:px-8 py-6 text-neutral rounded-b-2xl md:rounded-bl-[0] md:rounded-r-2xl shadow-md z-20"
          >
            <h3 className="text-3xl font-bold mb-5 text-white">
              {whyChooseUsData[activeIndex].title}
            </h3>
            <p className="text-neutral leading-8 max-w-xl tracking-wider pb-20 md:pb-0">
              {whyChooseUsData[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default WhyChooseUs;
