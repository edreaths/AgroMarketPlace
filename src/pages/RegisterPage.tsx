import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-12">
        <RegisterForm />
      </main>

      <Footer />
    </>
  );
}