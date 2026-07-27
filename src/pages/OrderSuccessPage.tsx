import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6">
        <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
          <CheckCircle
            size={90}
            className="mx-auto text-green-600"
          />

          <h1 className="mt-6 text-4xl font-bold">
            Order Successful!
          </h1>

          <p className="mt-4 text-gray-500">
            Thank you for shopping with AgroMarketPlace.
            Your order has been received successfully.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/marketplace"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}