import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Footer";

function MainLayout() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>
      <Toaster />

      <footer className="w-full min-h-11/12">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
