import OrderCard from "./OrderCard";

const orders = [
  {
    id: "AGM-2026-0001",
    date: "27 July 2026",
    items: 3,
    total: 120,
    status: "Pending" as const,
  },
  {
    id: "AGM-2026-0002",
    date: "25 July 2026",
    items: 5,
    total: 245,
    status: "Processing" as const,
  },
  {
    id: "AGM-2026-0003",
    date: "20 July 2026",
    items: 2,
    total: 80,
    status: "Delivered" as const,
  },
];

export default function OrderList() {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}