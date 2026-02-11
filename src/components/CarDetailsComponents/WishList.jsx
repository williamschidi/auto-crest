// import { Icon } from "@iconify/react";
// import { SavedCarsContext } from "./SavedCarsContext";
// import { useContext } from "react";

// function WishList({ id }) {
//   const { handleSaveCar, isCarSaved } = useContext(
//     SavedCarsContext,
//   );
//   return (
//     <button
//       onClick={() => handleSaveCar(id)}
//       className=" border border-primary  px-2 py-2 rounded-full"
//     >
//       {isCarSaved(id) ? (
//         <Icon
//           icon="tabler:heart-filled"
//           width="22"
//           height="22"
//           className="text-red-800"
//         />
//       ) : (
//         <Icon
//           icon="tabler:heart"
//           width="22"
//           height="22"
//           className="text-primary"
//         />
//       )}
//     </button>
//   );
// }

// export default WishList;

import { Icon } from "@iconify/react";
import { useContext } from "react";
import { SavedCarsContext } from "./SavedCarsContext";

function WishList({ id }) {
  const { handleSaveCar, isCarSaved } = useContext(
    SavedCarsContext,
  );
  const saved = isCarSaved(id);

  return (
    <button
      onClick={() => handleSaveCar(id)}
      aria-label="Add to wishlist"
      className={`
        group flex items-center justify-center
        w-10 h-10 rounded-full
        border transition-all duration-300
        ${
          saved
            ? "bg-red-50 border-red-300 shadow-red-200/50"
            : "bg-white border-primary/40 hover:border-primary"
        }
        hover:shadow-lg hover:scale-105
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/40
      `}
    >
      <Icon
        icon={
          saved ? "tabler:heart-filled" : "tabler:heart"
        }
        width="20"
        height="20"
        className={`
          transition-all duration-300
          ${
            saved
              ? "text-red-600 scale-110"
              : "text-primary group-hover:text-primary/90"
          }
        `}
      />
    </button>
  );
}

export default WishList;
