import type { Product } from "@/types/product";

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">
        Product Description
      </h2>

      <p className="leading-8 text-gray-600">
        {product.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div>
          <p className="font-semibold">Category</p>
          <p>{product.category}</p>
        </div>

        <div>
          <p className="font-semibold">Vendor</p>
          <p>{product.vendor}</p>
        </div>

        <div>
          <p className="font-semibold">Location</p>
          <p>{product.location}</p>
        </div>

        <div>
          <p className="font-semibold">Unit</p>
          <p>{product.unit}</p>
        </div>

        <div>
          <p className="font-semibold">Stock</p>
          <p>{product.stock}</p>
        </div>
      </div>
    </section>
  );
}