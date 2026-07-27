import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VerifyEmail from "@/components/auth/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-12">
        <VerifyEmail />
      </main>

      <Footer />
    </>
  );
}