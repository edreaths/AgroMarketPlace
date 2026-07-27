import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <h2 className="mb-4 text-3xl font-bold">
        Forgot Password?
      </h2>

      <p className="mb-6 text-gray-600">
        Enter your email address and we will send you a password reset link.
      </p>

      <form className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>


        <button
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Send Reset Link
        </button>

      </form>


      <p className="mt-6 text-center">
        Remember your password?{" "}

        <Link
          to="/login"
          className="font-semibold text-green-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </div>
  );
}