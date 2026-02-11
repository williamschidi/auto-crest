import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function PaymentOption() {
  return (
    <motion.section
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md w-full md:w-[400px] lg:w-[450px]"
    >
      {/* Header */}
      <h3 className="text-lg font-bold mb-1">
        Payment Options
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Secure & refundable reservation
      </p>

      {/* Primary CTA */}
      <button className="group w-full bg-primary hover:bg-primary/80 text-neutral  font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition">
        Reserve This Car
        <Icon
          icon="solar:arrow-right-linear"
          width={20}
          className="group-hover:translate-x-4 transition"
        />
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        ₦5,000 refundable hold • No obligation
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Secondary CTA */}
      <button className="w-full border border-gray-300 text-gray-800 font-medium py-3 rounded-full hover:bg-gray-100 transition">
        Send Message to Dealer
      </button>

      {/* Trust */}
      <div className="flex items-center gap-2 mt-6 text-xs text-gray-500">
        <Icon
          icon="material-symbols:lock-outline"
          width={16}
        />
        <span>Secure payments • Dealer verified</span>
      </div>
    </motion.section>
  );
}

export default PaymentOption;
