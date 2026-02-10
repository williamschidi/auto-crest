import { createContext, useState } from "react";

export const SearchCars = createContext(null);

function SearchCarsProvider({ children }) {
  const [searchCars, setSearchCars] = useState("");
  return (
    <SearchCars.Provider
      value={{ searchCars, setSearchCars }}
    >
      {children}
    </SearchCars.Provider>
  );
}

export default SearchCarsProvider;
