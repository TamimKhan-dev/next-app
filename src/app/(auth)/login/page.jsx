"use client";

import React from "react";
import toast from "react-hot-toast";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      toast.success("Logged In, Successfully! 😊");
      window.location.href = "/allComponents";
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Log In</h1>
        <p className="text-sm text-gray-400">Sign in to access your account</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              defaultValue="admin@comtech.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              required
              defaultValue="tamimKhan@#$"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary cursor-pointer w-full rounded-md py-3 text-white"
          >
            Login
          </button>
        </div>
      </form>
      <div className="space-y-1">
        <button className="text-xs hover:underline hover:text-primary text-gray-400 cursor-pointer">
          Forgot password?
        </button>
      </div>
      <div className="px-6 text-sm text-center text-gray-400">
        Don&apos;t have an account yet?{" "}
        <p className="hover:underline hover:text-primary text-gray-600">
          Sign up
        </p>
        .
      </div>
    </div>
  );
}
