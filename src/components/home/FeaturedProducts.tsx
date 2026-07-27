import { motion } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="mt-2 text-gray-600">
              Fresh agricultural products from trusted vendors.
            </p>
          </div>

          <button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
            View All
          </button>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}