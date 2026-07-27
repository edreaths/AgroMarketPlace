import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex w-full max-w-xl items-center rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm">
      <Search className="mr-3 h-5 w-5 text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 outline-none"
      />

      <button className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
        Search
      </button>
    </div>
  );
}

export default SearchBar;