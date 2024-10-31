import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="mx-3 sm:mx-[10%]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
