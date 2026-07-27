import { motion } from "framer-motion";
import { features } from "@/data/features";
import FeatureCard from "@/components/common/FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose AgroMarketPlace?
          </h2>

          <p className="mt-4 text-gray-600">
            We connect farmers, vendors and buyers through a trusted digital marketplace.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}