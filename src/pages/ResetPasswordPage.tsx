import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-12">
        <ResetPasswordForm />
      </main>

      <Footer />
    </>
  );
}