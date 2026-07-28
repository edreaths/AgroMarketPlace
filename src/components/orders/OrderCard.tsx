import { Link } from "react-router-dom";
import OrderStatus from "./OrderStatus";

type OrderCardProps = {
  order: {
    id: string;
    date: string;
    items: number;
    total: number;
    status:
      | "Pending"
      | "Processing"
      | "Shipped"
      | "Delivered"
      | "Cancelled"
      | "Refunded";
  };
};

export default function OrderCard({
  order,
}: OrderCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h3 className="text-xl font-bold">
            Order #{order.id}
          </h3>

          <p className="mt-1 text-gray-500">
            {order.date}
          </p>

          <p className="mt-2">
            {order.items} item(s)
          </p>

          <p className="mt-1 font-semibold text-green-700">
            ${order.total.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">

          <OrderStatus status={order.status} />

          <Link
            to={`/orders/${order.id}`}
            className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}