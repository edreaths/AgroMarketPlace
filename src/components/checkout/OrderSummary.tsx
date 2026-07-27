import useCart from "@/hooks/useCart";

export default function OrderSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 2500 : 0;

  const tax = subtotal * 0.075;

  const total = subtotal + shipping + tax;

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

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

        <div className="flex justify-between">
          <span>Tax (7.5%)</span>

          <span>
            ₦{tax.toLocaleString()}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-green-700">
            ₦{total.toLocaleString()}
          </span>
        </div>

      </div>
    </section>
  );
}