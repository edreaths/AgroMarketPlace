export default function CouponBox() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Coupon Code
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-green-600"
        />

        <button
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Apply
        </button>
      </div>
    </section>
  );
}