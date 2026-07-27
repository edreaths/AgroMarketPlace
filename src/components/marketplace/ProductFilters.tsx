import { Filter } from "lucide-react";

interface ProductFiltersProps {
  category: string;
  onCategoryChange: (category: string) => void;

  maxPrice: number;
  onPriceChange: (price: number) => void;
  minRating: number;
onRatingChange: (rating: number) => void;
}

export default function ProductFilters({
  category,
  onCategoryChange,
  maxPrice,
  onPriceChange,
  minRating,
  onRatingChange,
}: ProductFiltersProps) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <Filter className="text-green-600" size={20} />
        <h2 className="text-lg font-bold">Filters</h2>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold">Categories</h3>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3"
        >
          <option value="All">All Categories</option>
          <option value="Grains">Grains</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Livestock">Livestock</option>
        </select>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold">Price Range</h3>

                <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={maxPrice}
            onChange={(e) =>
                onPriceChange(Number(e.target.value))
            }
            className="w-full"
            />

            <p className="mt-2 text-sm text-gray-600">
            Up to ₦{maxPrice.toLocaleString()}
            </p>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-3 font-semibold">Minimum Rating</h3>

        <select
        value={minRating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        className="w-full rounded-lg border border-gray-300 p-3"
        >
        <option value={0}>All Ratings</option>
        <option value={4}>4 Stars & Above</option>
        <option value={3}>3 Stars & Above</option>
        <option value={2}>2 Stars & Above</option>
        </select>
      </div>
    </aside>
  );
}