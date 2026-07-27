import useAuth from "@/hooks/useAuth";

export default function ProfilePhoto() {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Profile Photo
      </h2>

      <div className="flex flex-col items-center">

        <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-green-700 text-5xl font-bold text-white">
          {user?.fullName.charAt(0)}
        </div>

        <button
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Upload New Photo
        </button>

      </div>

    </div>
  );
}