function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="mb-8">

      <label
        className="
        block
        mb-2
        font-semibold
        text-green-700
        "
      >
        🔍 Search Plants
      </label>

      <input
        type="text"
        placeholder="Search by plant name or scientific name..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
        w-full
        p-4
        rounded-2xl
        border
        border-gray-300
        shadow-md
        focus:ring-4
        focus:ring-green-200
        focus:border-green-500
        outline-none
        transition
        "
      />

    </div>
  );
}

export default SearchBar;