import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import type { FlashDeal } from "@/data/flashDeals";

interface FlashDealCardProps {
  deal: FlashDeal;
}

export default function FlashDealCard({
  deal,
}: FlashDealCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.name}
          className="h-56 w-full object-cover"
        />

        <span className="absolute left-4 top-4 rounded-lg bg-red-600 px-3 py-1 text-sm font-bold text-white">
          -{deal.discount}%
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-bold">{deal.name}</h3>

        <p className="mt-1 text-sm text-gray-500">
          {deal.unit}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-green-700">
            ₦{deal.price.toLocaleString()}
          </span>

          <span className="text-gray-400 line-through">
            ₦{deal.oldPrice.toLocaleString()}
          </span>
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}