import { Link } from "react-router-dom";

export default function PlaceOrderButton() {
  return (
    <Link
      to="/order-success"
      className="block w-full rounded-xl bg-green-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-green-700"
    >
      Place Order
    </Link>
  );
}