import useCart from "@/hooks/useCart";

import { Link } from "react-router-dom";

export default function OrderSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 2500;

  const total = subtotal + shipping;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>
            ₦{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>
            ₦{shipping.toLocaleString()}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span>
            ₦{total.toLocaleString()}
          </span>
        </div>

       <Link  to="/order-success"
  className="mt-6 block w-full rounded-xl bg-green-600 py-4 text-center font-semibold text-white hover:bg-green-700">
  Place Order </Link>
      </div>
    </div>
  );
}