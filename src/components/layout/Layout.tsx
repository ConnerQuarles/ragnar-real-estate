import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSmoothScroll } from "../../lib/useSmoothScroll";

export default function Layout() {
  const { pathname } = useLocation();
  useSmoothScroll(pathname);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
