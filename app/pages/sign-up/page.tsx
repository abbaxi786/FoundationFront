"use client";

import React, { useState } from "react";
import axios from "axios";

interface SignUpForm {
  username: string;
  email: string;
  password: string;
}

function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      const value = await axios.post(`${process.env.BACKEND_URL}/api/sign-up`)
      console.log("The form result: "+JSON.stringify(value))
    }catch(error){
      console.log(error)
    }

    console.log("Sign up form:", form);
  }

  return (
    <main className="min-h-screen bg-cyan-50 px-4 py-10">
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-md
            rounded-2xl
            border
            border-cyan-100
            bg-white
            p-6
            shadow-lg
            sm:p-8
          "
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-cyan-700 sm:text-5xl">
              Sign Up
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Create your account to get started.
            </p>
          </div>

          {/* Username */}
          <div className="mb-5">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-cyan-800"
            >
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="
                w-full
                rounded-lg
                border
                border-cyan-200
                px-4
                py-3
                text-gray-700
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-100
              "
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-cyan-800"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full
                rounded-lg
                border
                border-cyan-200
                px-4
                py-3
                text-gray-700
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-100
              "
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-cyan-800"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="
                w-full
                rounded-lg
                border
                border-cyan-200
                px-4
                py-3
                text-gray-700
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-100
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-cyan-600
              px-4
              py-3
              font-semibold
              text-white
              transition
              hover:bg-cyan-700
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              focus:ring-offset-2
            "
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

export default SignUp;