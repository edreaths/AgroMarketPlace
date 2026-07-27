import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-12">
        <ForgotPasswordForm />
      </main>

      <Footer />
    </>
  );
}