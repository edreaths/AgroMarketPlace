import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;

  showDiscount?: boolean;
  showVendor?: boolean;
  showLocation?: boolean;
  showWishlist?: boolean;
  showRating?: boolean;
  showOldPrice?: boolean;
  showAddToCart?: boolean;
}

export default function ProductCard({
  product,
  showDiscount = true,
  showVendor = true,
  showLocation = true,
  showWishlist = true,
  showRating = true,
  showOldPrice = true,
  showAddToCart = true,
}: ProductCardProps) {
  return (

  <Link to={`/products/${product.id}`}>
  <motion.article
    whileHover={{ y: -8 }}
    transition={{ duration: 0.25 }}
    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
  >
    {/* Duk content na ProductCard zai kasance a nan */}
  </motion.article>
</Link>
  );
}