export default function Pagination({
  handlePageChange,
  paginationPageNumber,
  totalPages,
}) {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(
    1,
    paginationPageNumber - Math.floor(maxVisiblePages / 2)
  );
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust startPage if we're near the end
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // First page and ellipsis
  if (startPage > 1) {
    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-3 py-2 rounded-md ${
          paginationPageNumber === 1
            ? "bg-blue-500 text-white"
            : "text-gray-700 bg-gray-300 hover:bg-gray-100"
        }`}
      >
        1
      </button>
    );
    if (startPage > 2) {
      pageNumbers.push(
        <span key="start-ellipsis" className="px-3 py-2 text-white">
          ...
        </span>
      );
    }
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`px-3 py-2 rounded-md ${
          paginationPageNumber === i
            ? "bg-blue-500 text-white"
            : "text-gray-700 bg-gray-300 hover:bg-gray-100"
        }`}
      >
        {i}
      </button>
    );
  }

  // Last page and ellipsis
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-3 py-2 text-white">
          ...
        </span>
      );
    }
    pageNumbers.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`px-3 py-2 rounded-md ${
          paginationPageNumber === totalPages
            ? "bg-blue-500 text-white"
            : "text-gray-700 bg-gray-300 hover:bg-gray-100"
        }`}
      >
        {totalPages}
      </button>
    );
  }

  return pageNumbers;
}
