import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function OrderSuccessPage() {
  const orderNumber = `AGRO-${Date.now()}`;

  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border bg-white p-10 text-center shadow-sm">

          <CheckCircle
            size={80}
            className="mx-auto mb-6 text-green-600"
          />

          <h1 className="mb-4 text-4xl font-bold">
            Order Placed Successfully!
          </h1>

          <p className="mb-6 text-gray-600">
            Thank you for shopping with AgroMarketPlace.
            Your order has been received successfully.
          </p>

          <div className="mb-8 rounded-xl bg-green-50 p-5">
            <p className="text-sm text-gray-600">
              Order Number
            </p>

            <p className="mt-2 text-xl font-bold text-green-700">
              {orderNumber}
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Payment Status
            </p>

            <span className="mt-2 inline-block rounded-full bg-green-600 px-4 py-2 text-white">
              Pending
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">

            <Link
              to="/marketplace"
              className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="flex-1 rounded-xl border border-green-600 py-3 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Back to Home
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}