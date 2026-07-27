import useAuth from "@/hooks/useAuth";

export default function ProfileHeader() {
  const { user } = useAuth();

  return (
    <div className="mb-8 rounded-2xl bg-green-700 p-8 text-white shadow">

      <h1 className="text-4xl font-bold">
        My Profile
      </h1>

      <p className="mt-3 text-lg text-green-100">
        Manage your account information,
        <span className="font-semibold">
          {" "}
          {user?.fullName}
        </span>
      </p>

    </div>
  );
}