import { Outlet } from "react-router-dom";
import NavBar from "../globalComponents/navBar";
import Footer from "../globalComponents/Footer";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="py-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
