import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />

      <div className="md:my-12">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
