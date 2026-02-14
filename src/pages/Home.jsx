import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto text-center mt-20">
      <h2 className="text-4xl font-bold mb-4">Explore Products Smarter</h2>
      <p className="text-gray-600 mb-6">
        CatalogHub lets you search, filter, and browse products with real-world UX patterns.
      </p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Browse Products
      </Link>
    </section>
  );
}
