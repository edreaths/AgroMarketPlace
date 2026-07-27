import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          Become a Vendor Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-lg text-green-100"
        >
          Join thousands of farmers and agricultural businesses using
          AgroMarketPlace to reach more customers across Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:scale-105"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            to="/marketplace"
            className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
          >
            Explore Marketplace
          </Link>
        </motion.div>

      </div>
    </section>
  );
}