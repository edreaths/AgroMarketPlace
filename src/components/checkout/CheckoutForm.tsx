interface CheckoutFormProps {
  onSubmit?: () => void;
}

export default function CheckoutForm({
  onSubmit,
}: CheckoutFormProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Shipping Information
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-lg border p-3"
          placeholder="First Name"
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Last Name"
        />

        <input
          className="rounded-lg border p-3 md:col-span-2"
          placeholder="Email Address"
        />

        <input
          className="rounded-lg border p-3 md:col-span-2"
          placeholder="Phone Number"
        />

        <input
          className="rounded-lg border p-3 md:col-span-2"
          placeholder="Delivery Address"
        />

        <input
          className="rounded-lg border p-3"
          placeholder="City"
        />

        <input
          className="rounded-lg border p-3"
          placeholder="State"
        />
      </div>
    </div>
  );
}