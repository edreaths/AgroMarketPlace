import { Heart } from "lucide-react";

export default function WishlistEmpty() {
  return (
    <div className="rounded-2xl border p-12 text-center">

      <Heart
        className="mx-auto mb-4 text-gray-400"
        size={60}
      />

      <h2 className="text-2xl font-bold">
        Wishlist is Empty
      </h2>

      <p className="mt-3 text-gray-600">
        Start adding products you love.
      </p>

    </div>
  );
}