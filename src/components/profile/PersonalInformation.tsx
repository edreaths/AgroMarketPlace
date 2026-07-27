import useAuth from "@/hooks/useAuth";

export default function PersonalInformation() {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Personal Information
      </h2>

      <form className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            defaultValue={user?.fullName}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            defaultValue={user?.email}
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
            Country
          </label>

          <input
            type="text"
            defaultValue="Nigeria"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            type="text"
            placeholder="Kano State"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Local Government
          </label>

          <input
            type="text"
            placeholder="Dawakin Tofa"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your address..."
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>

      </form>

    </div>
  );
}