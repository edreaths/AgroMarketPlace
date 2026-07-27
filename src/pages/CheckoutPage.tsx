import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-8 text-4xl font-bold">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <CheckoutForm />

            <PaymentMethod />
          </div>

          <OrderSummary />
        </div>
      </main>

      <Footer />
    </>
  );
}