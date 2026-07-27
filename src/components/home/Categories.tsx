import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/common/CategoryCard";

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="mt-4 text-gray-600">
            Discover quality agricultural products from trusted vendors.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}