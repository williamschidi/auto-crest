import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import SavedCars from "./pages/SavedCars";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";
import SavedCarsProvider from "./components/CarDetailsComponents/SavedCarsContext";

function App() {
  return (
    <SavedCarsProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cars/:id"
            element={<CarDetails />}
          />
          <Route
            path="/saved-cars"
            element={<SavedCars />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SavedCarsProvider>
  );
}

export default App;
