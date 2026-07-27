export default function PaymentMethod() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">
        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-green-600">
          <div>
            <h3 className="font-semibold">
              Paystack
            </h3>

            <p className="text-sm text-gray-500">
              Pay securely using your debit or credit card.
            </p>
          </div>

          <input
            type="radio"
            name="payment"
            defaultChecked
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-green-600">
          <div>
            <h3 className="font-semibold">
              Flutterwave
            </h3>

            <p className="text-sm text-gray-500">
              Pay using cards, bank transfer or mobile money.
            </p>
          </div>

          <input
            type="radio"
            name="payment"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-green-600">
          <div>
            <h3 className="font-semibold">
              Bank Transfer
            </h3>

            <p className="text-sm text-gray-500">
              Complete payment via direct bank transfer.
            </p>
          </div>

          <input
            type="radio"
            name="payment"
          />
        </label>
      </div>
    </section>
  );
}