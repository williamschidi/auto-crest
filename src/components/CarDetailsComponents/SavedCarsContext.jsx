import { createContext, useState } from "react";

export const SavedCarsContext = createContext();

function SavedCarsProvider({ children }) {
  const [savedCars, setSavedCars] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("savedCars")) || []
    );
  });
  // localStorage.removeItem("savedCars");

  function handleSaveCar(carId) {
    const updated = savedCars.includes(carId)
      ? savedCars.filter((id) => id !== carId)
      : [...savedCars, carId];

    setSavedCars(updated);

    localStorage.setItem(
      "savedCars",
      JSON.stringify(updated),
    );
    return updated;
  }

  function isCarSaved(carId) {
    return savedCars.includes(carId);
  }
  return (
    <SavedCarsContext.Provider
      value={{ savedCars, isCarSaved, handleSaveCar }}
    >
      {children}
    </SavedCarsContext.Provider>
  );
}

export default SavedCarsProvider;
