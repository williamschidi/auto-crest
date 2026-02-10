import { Outlet } from "react-router-dom";
import NavBar from "../globalComponents/NavigationBar";
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
