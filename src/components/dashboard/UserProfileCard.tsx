import useAuth from "@/hooks/useAuth";

export default function UserProfileCard() {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-700 text-3xl font-bold text-white">
          {user?.fullName.charAt(0)}
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold">
        {user?.fullName}
      </h2>

      <p className="mt-2 text-center text-gray-500">
        {user?.email}
      </p>

      <div className="mt-6 rounded-xl bg-green-50 p-4 text-center">
        <p className="font-medium">
          Role
        </p>

        <p className="font-bold capitalize text-green-700">
          {user?.role}
        </p>
      </div>

    </div>
  );
}