import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../services/Api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProducts();

        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <h2 className="text-xl font-semibold mb-4">
          Product not found
        </h2>
        <Link to="/products" className="underline text-blue-500">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex justify-center items-start p-6">
      <div className="max-w-5xl w-full h-150 bg-gray-100 rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8">

        {/* img*/}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-72 h-72 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4 capitalize">
            Category: {product.category}
          </p>

          <p className="text-2xl font-semibold mb-4">
            ${product.price}
          </p>

          <p className="mb-6 leading-relaxed">
            {product.description}
          </p>

          <Link
            to="/products"
            className="inline-block px-4 py-2 border rounded  bg-green-300  hover:bg-gray-100"
          >
            ← Back to products
          </Link>

     <div className="h-25 mt-10 w-100 rounded flex justify-center items-center gap-3 bg-gray-300"> 

         <div className="h-10 w-45 rounded bg-blue-300 flex items-center 
         justify-center cursor-pointer">Add To Cart</div>
  
         <div className="h-10 w-45 rounded bg-yellow-300 flex items-center 
         justify-center cursor-pointer "> Buy Now</div>

     </div>

      </div>

      </div>
    </div>
  );
}

export default ProductDetails;
