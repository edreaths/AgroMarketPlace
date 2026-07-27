export default function AccountOverview() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Account Overview
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
          <span>Total Orders</span>

          <span className="font-bold text-green-700">
            0
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
          <span>Wishlist</span>

          <span className="font-bold text-green-700">
            0
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
          <span>Cart Items</span>

          <span className="font-bold text-green-700">
            0
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
          <span>Email Status</span>

          <span className="font-bold text-green-700">
            Verified
          </span>
        </div>

      </div>

    </div>
  );
}