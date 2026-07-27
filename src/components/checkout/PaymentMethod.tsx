export default function PaymentMethod() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            defaultChecked
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />
          Card Payment
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />
          Bank Transfer
        </label>
      </div>
    </div>
  );
}