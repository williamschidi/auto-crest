import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SavedCarsContext } from "../components/CarDetailsComponents/SavedCarsContext";
import { SearchCars } from "./SearchCarsContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Browse Cars", path: "/browse" },
  { label: "Sell Your Car", path: "/sellCar" },
  { label: "Finance", path: "/finance" },
  { label: "Contact Us", path: "/contact" },
  { label: "About", path: "/about" },
];

function NavigationBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setSearchCars } = useContext(SearchCars);
  const location = useLocation();

  const { savedCars } = useContext(SavedCarsContext);

  function handleHomeClick() {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handleSearch(e) {
    if (e.key === "Enter" && searchValue.trim()) {
      setSearchCars(searchValue.trim());
      setSearchOpen(false);
      setSearchValue("");
      const features = document.querySelector("#features");
      features.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-2 lg:px-4 py-1 bg-white shadow-md">
      <NavLink
        to="/"
        className="w-[5rem] sm:w-[6rem]"
        onClick={handleHomeClick}
      >
        <img
          src="/images/autoCrest-1.webp"
          alt="Logo"
          className="w-full"
        />
      </NavLink>

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
                key={ind}
                onClick={() => setActiveIndex(ind)}
                className={`relative pb-1 cursor-pointer hover:text-primary ${activeIndex === ind ? "font-semibold text-primary" : "font-normal"} transition-all`}
              >
                <NavLink
                  to={item.path}
                  onClick={
                    item.path === "/"
                      ? handleHomeClick
                      : undefined
                  }
                >
                  {item.label}
                </NavLink>
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
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

        <NavLink
          to="/saved-cars"
          className="flex space-x-0 sm:space-x-1 items-center "
        >
          <Icon
            icon="mynaui:save"
            width="20"
            height="20"
            className="font-semibold"
          />
          <span className="hidden lg:inline-block text-xs sm:text-sm">
            Save
          </span>
          <span className="text-xs font-semibold">
            ({savedCars?.length})
          </span>
        </NavLink>
        <div className="relative group hidden md:inline-block">
          {/* Trigger Button */}
          <button className="flex items-center space-x-2 px-2 lg:px-4 py-1 lg:py-2 text-secondary border border-primary hover:bg-primary transition-all rounded-md">
            <span>
              <Icon
                icon="ph:user-duotone"
                width="20"
                height="20"
              />
            </span>
            <span className="text-sm">Account</span>
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
  );
}

export default NavigationBar;
