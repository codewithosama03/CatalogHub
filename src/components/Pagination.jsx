

export default function Pagination({ currentPage, totalPages, setCurrentPage}) {
  return (
    <div className="flex justify-center gap-2 mt-8 flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 border rounded cursor-pointer ${
            page === currentPage ? "bg-black text-white" : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

