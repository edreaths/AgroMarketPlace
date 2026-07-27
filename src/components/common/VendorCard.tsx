import { motion } from "framer-motion";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import type { Vendor } from "@/data/vendors";

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">
              {vendor.name}
            </h3>

            {vendor.verified && (
              <BadgeCheck
                className="text-green-600"
                size={20}
              />
            )}
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={15} />
            {vendor.location}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-2xl font-bold text-green-700">
            {vendor.products}
          </p>

          <span className="text-sm text-gray-500">
            Products
          </span>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {vendor.rating}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            Rating
          </span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
        Visit Store
      </button>
    </motion.article>
  );
}