import { Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "@/types/cart";
import useCart from "@/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">
      <img
        src={item.image}
        alt={item.name}
        className="h-36 w-36 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h2 className="text-xl font-bold">
          {item.name}
        </h2>

        <p className="mt-1 text-gray-500">
          {item.vendor}
        </p>

        <p className="mt-3 text-2xl font-bold text-green-700">
          ₦{item.price.toLocaleString()}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="rounded-lg border px-3 py-1 hover:bg-gray-100"
          >
            -
          </button>

          <span className="font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="rounded-lg border px-3 py-1 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 size={22} />
        </button>

        <p className="text-xl font-bold">
          ₦{(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
}