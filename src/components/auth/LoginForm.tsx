import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

export default function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login({
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      console.error(error);

      alert("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold">
        Welcome Back
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" />

            <span>Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </form>

      <p className="mt-6 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-green-600"
        >
          Register
        </Link>
      </p>
    </div>
  );
}