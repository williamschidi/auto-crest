import { useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import CarImageSlider from "../components/CarDetailsComponents/CarImageSlider";
import carDetails from "../components/homePageComponents/FeatureCarData";
import Details from "../components/CarDetailsComponents/Details";
import WishList from "../components/CarDetailsComponents/WishList";

function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/#features");
  }
  const { id } = useParams();
  const carId = Number(id);

  useEffect(() => {
    if (location.pathname.startsWith("/cars")) {
      window.scrollTo({
        top: 0,
        behavoir: "smooth",
      });
    }
  }, [location.pathname]);

  const car = carDetails.find(
    (carDetail) => carDetail.id === carId,
  );

  return (
    <section className="px-8 md:px-12 py-2">
      <div className="flex justify-start items-center gap-2 text-xs font-semibold mb-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-primary border border-b-primary" : "text-gray-500 border-b-transparent"}`
          }
        >
          Home
        </NavLink>
        <span>\</span>
        <NavLink
          to="/cars"
          className={({ isActive }) =>
            `${isActive ? "text-primary border border-t-0 border-l-0 border-r-0 border-b-primary" : "text-gray-500"}`
          }
        >
          Vehicle Details
        </NavLink>
      </div>
      <div className="flex justify-between items-center pr-12">
        <button
          className="flex justify-start items-center text-primary gap-4 text-sm"
          onClick={handleNavigation}
        >
          <Icon
            icon="gg:arrow-left-o"
            width="24"
            height="24"
          />
          <span className="font-bold">
            Back to Collections
          </span>
        </button>
        <WishList id={carId} />
      </div>

      <div className="flex justify-between items-start gap-8 pt-6 w-full">
        <div className="flex-[2] w-[45%]">
          <CarImageSlider car={car} />
        </div>
        <div className="flex-[3] px-8 ">
          <Details car={car} />
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
