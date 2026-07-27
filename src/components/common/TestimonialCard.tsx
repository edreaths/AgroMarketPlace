import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
    >
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold">{testimonial.name}</h3>

          <p className="text-sm text-gray-500">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>

      <div className="mt-4 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-5 text-gray-600 leading-relaxed">
        "{testimonial.comment}"
      </p>
    </motion.div>
  );
}