import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistEmpty from "@/components/wishlist/WishlistEmpty";

export default function WishlistPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <WishlistHeader />

        <WishlistEmpty />
      </main>

      <Footer />
    </>
  );
}