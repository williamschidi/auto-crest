import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import carData from "./carData";
import SelectOptions from "./SelectOptions";

function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    "Home",
    "Browse Cars",
    "Sell Your Car",
    "Finance",
    "Contact Us",
    "About",
  ];
  return (
    <section className="relative flex flex-col min-h-screen w-full overflow-x-hidden pb-8">
      <nav className="sticky top-0 left-0 z-50 flex justify-between items-center px-2 lg:px-4 py-2 bg-white shadow-md">
        <div className="w-[5rem] sm:w-[6rem]">
          <img
            src="./images/autoCrest-1.webp"
            alt="Logo"
            className="w-full"
          />
        </div>

        <AnimatePresence>
          {!searchOpen && (
            <motion.ul
              className="middle hidden md:flex gap-4 lg:gap-8 text-sm"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, ind) => (
                <li
                  key={item}
                  onClick={() => setActiveIndex(ind)}
                  className={`relative pb-1 cursor-pointer hover:text-primary ${activeIndex === ind ? "font-semibold text-primary" : "font-normal"} transition-all`}
                >
                  {item}
                  <motion.div
                    className="absolute left-0 bottom-0 h-0.5 origin-left bg-primary w-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeIndex === ind ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="relative flex gap-4 lg:gap-6 ">
          <div className="relative flex items-center">
            <motion.input
              type="text"
              placeholder="Search cars"
              className="absolute right-full px-2 sm:px-3 py-1 mr-1 sm:mr-2 border rounded-lg origin-right text-sm sm:text-base bg-white transition-transform max-w-[320px] w-56 focus:outline-none font-semibold"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: searchOpen ? 256 : 0,
                opacity: searchOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "linear" }}
              onBlur={() => setSearchOpen(false)}
            />
            {!searchOpen && (
              <motion.button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex space-x-2 items-center font-semibold"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  icon="mynaui:search"
                  width="20"
                  height="20"
                  className="font-semibold"
                />
                <span className="hidden lg:inline-block text-xs sm:text-sm">
                  Search
                </span>
              </motion.button>
            )}
          </div>

          <button className="flex space-x-0 sm:space-x-2 items-center font-semibold">
            <Icon
              icon="mynaui:save"
              width="20"
              height="20"
              className="font-semibold"
            />
            <span className="hidden lg:inline-block text-xs sm:text-sm">
              Save
            </span>
          </button>
          <div className="relative group hidden md:inline-block">
            {/* Trigger Button */}
            <button className="flex items-center space-x-2 px-2 lg:px-4 py-1 lg:py-2 text-secondary border border-primary hover:bg-primary transition-all rounded-md">
              <span>
                <Icon
                  icon="ph:user-duotone"
                  width="24"
                  height="24"
                />
              </span>
              <span>Account</span>
              {/* Optional caret icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-1 hidden group-hover:block bg-neutral shadow-md rounded-md p-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-primary cursor-pointer">
                Create
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-primary cursor-pointer">
                Login
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-primary cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-primary cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
          <button
            className="md:hidden p-1 rounded-md border border-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon
              icon={mobileOpen ? "mdi:close" : "mdi:menu"}
              width="24"
              height="24"
            />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 p-4 lg:hidden z-40"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Nav Links */}
              <ul className="flex flex-col gap-1">
                {navItems.map((item, ind) => (
                  <motion.li
                    key={item}
                    onClick={() => {
                      setActiveIndex(ind);
                      setMobileOpen(false);
                    }}
                    className={`cursor-pointer px-2 py-2 rounded-md hover:bg-primary hover:text-white ${
                      activeIndex === ind
                        ? "font-semibold text-primary"
                        : ""
                    }`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Account Section */}
              <ul className="flex flex-col gap-1 border-t border-gray-200 pt-2">
                {[
                  "Create",
                  "Login",
                  "Settings",
                  "Logout",
                ].map((item) => (
                  <motion.li
                    key={item}
                    className="px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="relative flex-1 bg-[url('./images/autoCrestBg.jpeg')]  bg-cover bg-center flex items-end justify-start px-4 py-8">
        <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
        <div className="absolute top-1/4 left-4 sm:left-8 lg:left-16 max-w-xl">
          <h2 className="text-3xl font-bold text-white leading-tight uppercase">
            Ultimate horse on <br />
            the track
          </h2>
          <p className="mt-4 text-neutral/70 text-sm sm:text-lg tracking-wide">
            Lets help you get your <br /> next car !
          </p>
          <button className="flex items-center justify-center space-x-2 mt-4 cursor-pointer bg-primary hover:bg-primary/70 px-6 py-2 rounded-md transition-all">
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
        <div className="hidden absolute bottom-5 lg:bottom-2 left-[50%] translate-x-[-50%] w-full max-w-2xl lg:max-w-4xl shadow-lg mx-auto md:flex flex-wrap gap-6 lg:gap-10  justify-between items-center px-4 lg:px-8 py-4 bg-white rounded-2xl">
          <SelectOptions />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
