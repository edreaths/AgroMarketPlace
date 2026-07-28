type OrderSummaryProps = {
  orderId: string;
  date: string;
  total: number;
  paymentMethod: string;
  shippingAddress: string;
};

export default function OrderSummary({
  orderId,
  date,
  total,
  paymentMethod,
  shippingAddress,
}: OrderSummaryProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="font-medium">Order ID</span>
          <span>{orderId}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Date</span>
          <span>{date}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Payment</span>
          <span>{paymentMethod}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-bold text-green-700">
            ${total.toFixed(2)}
          </span>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">
            Shipping Address
          </h3>

          <p className="text-gray-600">
            {shippingAddress}
          </p>
        </div>

      </div>
    </div>
  );
}