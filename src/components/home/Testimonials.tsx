import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/common/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by farmers, vendors and buyers across Nigeria.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}