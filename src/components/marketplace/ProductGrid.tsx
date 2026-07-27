import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({
  products: data = products,
}: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}