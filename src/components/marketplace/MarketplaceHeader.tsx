import { Search } from "lucide-react";

interface MarketplaceHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MarketplaceHeader({
  search,
  onSearchChange,
}: MarketplaceHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-600 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">
          Marketplace
        </h1>

        <p className="mt-3 max-w-2xl text-green-100">
          Discover quality agricultural products directly from trusted farmers
          and vendors across Nigeria.
        </p>

        <div className="relative mt-8 max-w-2xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search rice, maize, tomatoes..."
            className="w-full rounded-xl bg-white py-4 pl-12 pr-4 text-gray-700 outline-none"
          />
        </div>
      </div>
    </section>
  );
}