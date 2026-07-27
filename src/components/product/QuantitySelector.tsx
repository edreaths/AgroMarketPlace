import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        className="rounded-lg border p-2 hover:bg-gray-100"
      >
        <Minus size={18} />
      </button>

      <span className="min-w-[40px] text-center text-lg font-semibold">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="rounded-lg border p-2 hover:bg-gray-100"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}