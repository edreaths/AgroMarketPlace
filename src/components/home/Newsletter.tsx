import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-green-700 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Stay Updated
        </motion.h2>

        <p className="mt-4 text-lg text-green-100">
          Subscribe to receive new products, discounts and farming updates.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border-none px-5 py-4 outline-none"
          />

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}