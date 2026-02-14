import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 shadow px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">CatalogHub</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
      </div>
    </nav>
  );
}

