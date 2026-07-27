export default function DeleteAccount() {
  return (
    <div className="rounded-2xl border border-red-300 bg-red-50 p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-red-700">
        Danger Zone
      </h2>

      <p className="mt-3 text-gray-700">
        Deleting your account is permanent.
        This action cannot be undone.
      </p>

      <button
        className="mt-6 rounded-xl bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        Delete My Account
      </button>

    </div>
  );
}