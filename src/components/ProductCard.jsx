// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="font-semibold">{product.title}</h3>
//       <p className="text-sm text-gray-500">{product.category}</p>
//       <p className="mt-2 font-bold">${product.price}</p>
//     </div>
//   );
// }


export default function ProductCard({ product }) {
  return (
    <div
      className=" rounded-lg p-4 shadow hover:shadow-lg transition bg-white cursor-pointer"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-contain mb-3 rounded"
      />
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
}
