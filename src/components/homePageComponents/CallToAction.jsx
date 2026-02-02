import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="px-6 md:px-16 my-24 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
          style={{
            backgroundImage: "url('/images/hero-img.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative px-4 sm:px-8 py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Drive Your Next Car?
            </h2>
            <p className="text-white/90 max-w-xl leading-relaxed">
              Explore our carefully selected vehicles or
              speak with our experts today.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/cars"
              className="bg-white text-primary font-semibold px-4 sm:px-7 py-2 sm:py-3 rounded-full transition transform hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]"
            >
              Browse Cars
            </Link>

            <a
              href="https://wa.me/234XXXXXXXXX"
              className="border border-white text-white font-semibold px-4 sm:px-7 py-2 sm:py-3 rounded-full transition transform hover:scale-[1.03] hover:bg-white hover:text-primary active:scale-[0.97]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CallToAction;
