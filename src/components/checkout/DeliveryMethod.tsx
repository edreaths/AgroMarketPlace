export default function DeliveryMethod() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Delivery Method
      </h2>

      <div className="space-y-4">
        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-green-600">
          <div>
            <h3 className="font-semibold">
              Standard Delivery
            </h3>

            <p className="text-sm text-gray-500">
              Delivery within 3–5 business days.
            </p>
          </div>

          <input type="radio" name="delivery" defaultChecked />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-green-600">
          <div>
            <h3 className="font-semibold">
              Express Delivery
            </h3>

            <p className="text-sm text-gray-500">
              Delivery within 24–48 hours.
            </p>
          </div>

          <input type="radio" name="delivery" />
        </label>
      </div>
    </section>
  );
}