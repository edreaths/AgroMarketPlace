import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactInformation from "@/components/checkout/ContactInformation";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import DeliveryMethod from "@/components/checkout/DeliveryMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import CouponBox from "@/components/checkout/CouponBox";
import OrderSummary from "@/components/checkout/OrderSummary";
import PlaceOrderButton from "@/components/checkout/PlaceOrderButton";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-10 text-4xl font-bold">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="space-y-6 lg:col-span-2">
            <ContactInformation />

            <ShippingAddress />

            <DeliveryMethod />

            <PaymentMethod />

            <CouponBox />
          </div>

          <div className="space-y-6">
            <OrderSummary />

            <PlaceOrderButton />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}