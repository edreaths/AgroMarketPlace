import { Link } from "react-router-dom";

export default function ResetPasswordForm() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-4 text-3xl font-bold">
        Reset Password
      </h2>

      <p className="mb-6 text-gray-600">
        Create a new password for your account.
      </p>

      <form className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <button
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Reset Password
        </button>

      </form>

      <p className="mt-6 text-center">
        <Link
          to="/login"
          className="font-semibold text-green-600 hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </div>
  );
}