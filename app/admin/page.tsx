"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getApiError, loginAdmin } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await loginAdmin(email, password);

      if (res.success) {
        toast.success("Logged in successfully");
        router.push("/admin/dashboard");
      }
    } catch (err) {
      toast.error(getApiError(err, "Login failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5 font-sans">
  <div className="w-full max-w-sm rounded-lg bg-white p-10 shadow-md">
    <h1 className="mb-7 text-xl font-semibold text-gray-900">
      Admin Login
    </h1>

    <label
      htmlFor="email"
      className="mb-1.5 block text-sm font-medium text-gray-700"
    >
      Email
    </label>

    <input
      id="email"
      type="email"
      placeholder="admin@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mb-5 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none transition-colors focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
    />

    <label
      htmlFor="password"
      className="mb-1.5 block text-sm font-medium text-gray-700"
    >
      Password
    </label>

    <input
      id="password"
      type="password"
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleLogin();
      }}
      className="mb-5 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none transition-colors focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
    />

    <button
      onClick={handleLogin}
      disabled={isSubmitting}
      className="w-full rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? "Signing In..." : "Sign In"}
    </button>
  </div>
</div>
  );
}
