import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import RelatedProducts from "@/components/product/RelatedProducts";

import { products } from "@/data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The product you are looking for does not exist.
          </p>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <section className="grid gap-10 lg:grid-cols-2">
          <ProductGallery
            image={product.image}
            name={product.name}
          />

          <ProductInfo
            product={product}
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() =>
              setQuantity((q) => Math.max(1, q - 1))
            }
          />
        </section>

        <ProductDescription product={product} />

        <RelatedProducts product={product} />
      </main>

      <Footer />
    </>
  );
}