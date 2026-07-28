type OrderStatusProps = {
  status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled"
    | "Refunded";
};

export default function OrderStatus({
  status,
}: OrderStatusProps) {
  const colors = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    Processing:
      "bg-blue-100 text-blue-700",

    Shipped:
      "bg-purple-100 text-purple-700",

    Delivered:
      "bg-green-100 text-green-700",

    Cancelled:
      "bg-red-100 text-red-700",

    Refunded:
      "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}