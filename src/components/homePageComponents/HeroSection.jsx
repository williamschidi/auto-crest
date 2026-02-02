import { Icon } from "@iconify/react";

import SelectOptions from "./SelectOptions";
import NavBar from "../../globalComponents/navBar";

function HeroSection({ carRef }) {
  return (
    <section className="relative flex flex-col min-h-screen w-full overflow-x-hidden pb-8">
      <NavBar />
      <div className="relative min-h-[85vh] sm:min-h-screen bg-[url('./images/autocrestMobile-1.webp')] sm:bg-[url('./images/autoCrestBg.jpeg')] bg-cover bg-no-repeat bg-[position:50%_75%] sm:bg-center px-4 py-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/40"></div>

        <div className=" absolute bottom-28 sm:top-1/4 left-1/2 sm:left-8 lg:left-16 -translate-x-1/2 sm:translate-x-0 text-center sm:text-left max-w-[90%] sm:max-w-xl">
          <h2 className=" text:xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight uppercase">
            Ultimate horse on <br />
            the track
          </h2>
          <p className="mt-3 sm:mt-4 text-white/70 text-sm sm:text-lg tracking-wide">
            Lets help you get your <br /> next car !
          </p>
          <button
            onClick={() => {
              carRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            id="explore"
            className="mt-6 w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 px-8 py-3 rounded-lg text-sm font-semibold transition-all"
          >
            <span className="text-neutral text-sm font-semibold tracking-tighter">
              Explore more
            </span>
            <Icon
              icon="guidance:left-arrow"
              width="20"
              height="20"
              className="text-neutral"
            />
          </button>
        </div>

        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 left-0 w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M1440,0 C1080,100 360,100 0,0 L0,100 L1440,100 Z"
            fill="white"
          />
        </svg>
        <div className="hidden absolute bottom-5 lg:bottom-2 left-[50%] translate-x-[-50%] w-full max-w-[45rem] lg:max-w-4xl shadow-lg mx-auto md:flex flex-wrap gap-6 lg:gap-10  justify-between items-center px-4 lg:px-8 py-4 bg-white rounded-2xl">
          <SelectOptions />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
