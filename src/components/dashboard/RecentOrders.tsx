import { Link } from "react-router-dom";

export default function RecentOrders() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Recent Orders
        </h2>

        <Link
          to="/orders"
          className="text-green-700 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="rounded-xl border-2 border-dashed border-gray-300 p-10 text-center">

        <h3 className="text-xl font-semibold">
          No Orders Yet
        </h3>

        <p className="mt-3 text-gray-500">
          You haven't placed any orders yet.
        </p>

        <Link
          to="/marketplace"
          className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Start Shopping
        </Link>

      </div>

    </div>
  );
}