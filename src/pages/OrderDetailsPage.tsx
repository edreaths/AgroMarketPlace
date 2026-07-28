import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrderTimeline from "@/components/orders/OrderTimeline";
import OrderSummary from "@/components/orders/OrderSummary";
import InvoiceButton from "@/components/orders/InvoiceButton";
import TrackOrderButton from "@/components/orders/TrackOrderButton";
import CancelOrderButton from "@/components/orders/CancelOrderButton";

export default function OrderDetailsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-10">
        <h1 className="text-4xl font-bold">
          Order Details
        </h1>

        <OrderTimeline
          steps={[
            { title: "Order Placed", completed: true },
            { title: "Payment Confirmed", completed: true },
            { title: "Processing", completed: true },
            { title: "Shipped", completed: false },
            { title: "Delivered", completed: false },
          ]}
        />

        <OrderSummary
          orderId="AGM-2026-0001"
          date="27 July 2026"
          total={120}
          paymentMethod="Credit Card"
          shippingAddress="Kano, Nigeria"
        />

        <div className="flex flex-wrap gap-4">
          <InvoiceButton />
          <TrackOrderButton />
          <CancelOrderButton />
        </div>
      </main>

      <Footer />
    </>
  );
}