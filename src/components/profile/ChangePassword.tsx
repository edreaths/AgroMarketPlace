export default function ChangePassword() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Change Password
      </h2>

      <form className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            Current Password
          </label>

          <input
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

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
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Update Password
        </button>

      </form>

    </div>
  );
}