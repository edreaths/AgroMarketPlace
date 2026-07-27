import { ArrowUpDown } from "lucide-react";

interface ProductSortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  total: number;
}

export default function ProductSort({
  sortBy,
  onSortChange,
  total,
}: ProductSortProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <p className="text-gray-600">
        Showing <span className="font-bold">{total}</span> products
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <label
          htmlFor="sort"
          className="text-sm font-medium text-gray-600"
        >
          Sort By
        </label>

        <ArrowUpDown
          size={18}
          className="text-green-600"
        />

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}