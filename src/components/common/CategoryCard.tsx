import { motion } from "framer-motion";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
        <Icon className="h-7 w-7 text-green-700" />
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {category.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {category.description}
      </p>

      <div className="mt-5">
        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
          {category.productCount} Products
        </span>
      </div>
    </motion.div>
  );
}