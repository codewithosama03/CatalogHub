function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-4 py-2 w-full md:w-1/3 rounded bg-white"
    />
  );
}

export default SearchBar;
