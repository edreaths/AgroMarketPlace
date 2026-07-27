import { motion } from "framer-motion";
import type { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-xl"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="h-8 w-8 text-green-700" />
      </div>

      <h3 className="text-xl font-bold">
        {feature.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {feature.description}
      </p>
    </motion.div>
  );
}