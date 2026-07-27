export default function ShippingAddress() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Shipping Address
      </h2>

      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+234..."
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Country
          </label>

          <input
            type="text"
            placeholder="Nigeria"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            State
          </label>

          <input
            type="text"
            placeholder="Kano"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            City
          </label>

          <input
            type="text"
            placeholder="Dawakin Tofa"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Postal Code
          </label>

          <input
            type="text"
            placeholder="700001"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Street Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your full delivery address"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>
      </form>
    </section>
  );
}