export default function ContactInformation() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@email.com"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Alternative Phone
          </label>

          <input
            type="tel"
            placeholder="+234..."
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>
      </div>
    </section>
  );
}