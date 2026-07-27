import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
      <ShoppingCart
        size={70}
        className="mx-auto mb-6 text-green-600"
      />

      <h2 className="text-3xl font-bold">
        Your Cart is Empty
      </h2>

      <p className="mt-3 text-gray-500">
        Looks like you haven't added any products yet.
      </p>

      <Link
        to="/marketplace"
        className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}