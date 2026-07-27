import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({
  product,
}: RelatedProductsProps) {
  const related = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        Related Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {related.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </section>
  );
}