import { motion } from "framer-motion";
import type { Statistic } from "@/data/statistics";

interface StatisticCardProps {
  statistic: Statistic;
}

export default function StatisticCard({
  statistic,
}: StatisticCardProps) {
  const Icon = statistic.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Icon className="h-8 w-8 text-green-700" />
      </div>

      <h3 className="text-4xl font-bold text-green-700">
        {statistic.value}
      </h3>

      <p className="mt-3 text-gray-600">
        {statistic.label}
      </p>
    </motion.div>
  );
}