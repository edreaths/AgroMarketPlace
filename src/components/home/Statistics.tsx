import { motion } from "framer-motion";
import { statistics } from "@/data/statistics";
import StatisticCard from "@/components/common/StatisticCard";

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">
            AgroMarketPlace in Numbers
          </h2>

          <p className="mt-4 text-gray-600">
            Connecting farmers, vendors and buyers across Nigeria.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <StatisticCard
              key={item.id}
              statistic={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}