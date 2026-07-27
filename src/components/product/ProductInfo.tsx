import { Star } from "lucide-react";
import type { Product } from "@/types/product";
import QuantitySelector from "./QuantitySelector";
import useCart from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";

interface ProductInfoProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ProductInfo({
  product,
  quantity,
  onIncrease,
  onDecrease,
}: ProductInfoProps) {

  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* sauran code */}

      <QuantitySelector
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

     <button
  onClick={() => {
    addToCart(product);
    navigate("/cart");
  }}
  className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
>
  Add to Cart
</button>
    </div>
  );
}