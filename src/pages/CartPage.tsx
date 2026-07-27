import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

import useCart from "@/hooks/useCart";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-8 text-4xl font-bold">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
            <div className="space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <CartSummary />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}