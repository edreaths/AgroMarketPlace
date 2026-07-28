import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrderList from "@/components/orders/OrderList";

export default function OrdersPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="mb-8 text-4xl font-bold">
          My Orders
        </h1>

        <OrderList />

      </main>

      <Footer />
    </>
  );
}