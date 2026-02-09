import { Icon } from "@iconify/react";
import { SavedCarsContext } from "./SavedCarsContext";
import { useContext } from "react";

function WishList({ id }) {
  const { handleSaveCar, isCarSaved } = useContext(
    SavedCarsContext,
  );
  return (
    <button
      onClick={() => handleSaveCar(id)}
      className=" border border-primary  px-2 py-2 rounded-full"
    >
      {isCarSaved(id) ? (
        <Icon
          icon="tabler:heart-filled"
          width="22"
          height="22"
          className="text-red-800"
        />
      ) : (
        <Icon
          icon="tabler:heart"
          width="22"
          height="22"
          className="text-primary"
        />
      )}
    </button>
  );
}

export default WishList;
