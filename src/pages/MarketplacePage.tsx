import { useMemo, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MarketplaceHeader from "@/components/marketplace/MarketplaceHeader";
import ProductFilters from "@/components/marketplace/ProductFilters";
import ProductSort from "@/components/marketplace/ProductSort";
import ProductGrid from "@/components/marketplace/ProductGrid";

import { products } from "@/data/products";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [minRating, setMinRating] = useState(0);

 const filteredProducts = useMemo(() => {
  const keyword = search.toLowerCase();

  let filtered = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword) ||
      product.vendor.toLowerCase().includes(keyword);

    const matchesCategory =
      category === "All" ||
      product.category === category;
      const matchesPrice =
         product.price <= maxPrice;
     const matchesRating =
  product.rating >= minRating;

return (
  matchesSearch &&
  matchesCategory &&
  matchesPrice &&
  matchesRating
);
  });

  switch (sortBy) {
    case "Price: Low to High":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "Price: High to Low":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "Highest Rated":
      filtered.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return filtered;
}, [search, category, sortBy]);
  return (
    <>
      <Navbar />

      <MarketplaceHeader
        search={search}
        onSearchChange={setSearch}
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
         <ProductFilters
            category={category}
            onCategoryChange={setCategory}
            maxPrice={maxPrice}
            onPriceChange={setMaxPrice}
            minRating={minRating}
            onRatingChange={setMinRating}
            />

          <div>
            <ProductSort
            sortBy={sortBy}
            onSortChange={setSortBy}
            total={filteredProducts.length}/>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}