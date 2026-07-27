import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

        <Link
          to="/orders"
          className="rounded-xl bg-green-600 p-4 text-center font-semibold text-white transition hover:bg-green-700"
        >
          📦
          <br />
          My Orders
        </Link>

        <Link
          to="/wishlist"
          className="rounded-xl bg-pink-500 p-4 text-center font-semibold text-white transition hover:bg-pink-600"
        >
          ❤️
          <br />
          Wishlist
        </Link>

        <Link
          to="/profile"
          className="rounded-xl bg-blue-500 p-4 text-center font-semibold text-white transition hover:bg-blue-600"
        >
          👤
          <br />
          Profile
        </Link>

        <Link
          to="/settings"
          className="rounded-xl bg-yellow-500 p-4 text-center font-semibold text-white transition hover:bg-yellow-600"
        >
          ⚙️
          <br />
          Settings
        </Link>

        <Link
          to="/marketplace"
          className="rounded-xl bg-purple-600 p-4 text-center font-semibold text-white transition hover:bg-purple-700"
        >
          🛒
          <br />
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}