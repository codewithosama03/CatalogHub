

import { useEffect, useState } from "react";
import { fetchProducts } from "../services/Api";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";

const PRODUCTS_PER_PAGE = 12;

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        console.log(data); //  you can see products here
        setProducts(data);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // pagination
  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  if (loading)
    return <h2 className="text-center mt-10">Loading...</h2>;

  if (error)
    return <h2 className="text-center mt-10">{error}</h2>;

  if (filteredProducts.length === 0)
    return (
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold">
          no products found!
        </h3>

        <Link
          to="/"
          className="hover:text-blue-500 mt-20 font-bold text-4xl underline"
        >
          back to home?
        </Link>
      </div>
    );

  return (
    <div className="p-6 bg-gray-200 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter category={category} setCategory={setCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Products;


