import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
