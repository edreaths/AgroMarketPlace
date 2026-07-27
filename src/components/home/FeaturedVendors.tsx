import { motion } from "framer-motion";
import VendorCard from "@/components/common/VendorCard";
import { vendors } from "@/data/vendors";

export default function FeaturedVendors() {
  return (
    <section className="bg-gray-50 py-20">
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
              Featured Vendors
            </h2>

            <p className="mt-2 text-gray-600">
              Meet our trusted agricultural vendors across Nigeria.
            </p>
          </div>

          <button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
            View All Vendors
          </button>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}