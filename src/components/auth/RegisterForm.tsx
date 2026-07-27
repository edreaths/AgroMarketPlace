import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold">
        Create Account
      </h2>

      <form className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

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

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+234..."
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <label className="flex items-start gap-3">
          <input type="checkbox" className="mt-1" />

          <span className="text-sm">
            I agree to the{" "}
            <Link
              to="/terms"
              className="text-green-600 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-green-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        <button
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Create Account
        </button>

      </form>

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-green-600"
        >
          Login
        </Link>
      </p>
    </div>
  );
}