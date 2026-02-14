
function Filter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border px-4 py-2 rounded bg-white" 
    >
      <option value="all">All</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
      <option value="skincare">Skincare</option>
      <option value="vehicle">Vehicle</option>
      <option value="womens-watches">Womens-Watches</option>
      <option value="football">Men-Perfumes</option>
    </select>
  );
}

export default Filter;



