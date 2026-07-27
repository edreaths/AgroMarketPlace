import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function VerifyEmail() {
  return (
    <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">

      <MailCheck
        size={70}
        className="mx-auto mb-6 text-green-600"
      />

      <h2 className="mb-4 text-3xl font-bold">
        Verify Your Email
      </h2>

      <p className="mb-6 text-gray-600">
        We've sent a verification link to your email address.
        Please check your inbox and click the link to activate your account.
      </p>

      <button
        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Resend Verification Email
      </button>

      <Link
        to="/login"
        className="mt-5 block text-green-600 hover:underline"
      >
        Back to Login
      </Link>

    </div>
  );
}