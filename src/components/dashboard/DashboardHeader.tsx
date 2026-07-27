import useAuth from "@/hooks/useAuth";

export default function DashboardHeader() {
  const { user } = useAuth();

  return (
    <div className="mb-8 rounded-2xl bg-green-700 p-8 text-white shadow">

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-3 text-lg text-green-100">
        Welcome back,
        <span className="font-semibold">
          {" "}
          {user?.fullName}
        </span>
        👋
      </p>

    </div>
  );
}