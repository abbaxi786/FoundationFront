"use client";

import React, { useState } from "react";
import axios from "axios";

interface LogInForm {
  email: string;
  password: string;
}

function LogIn() {
  const [form, setForm] = useState<LogInForm>({
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
      const value = await axios.post(`${process.env.BACKEND_URL}/api/log-in`)
      console.log("The form result: "+JSON.stringify(value))
    }catch(error){
      console.log(error)
    }

  

    console.log("The form data:", form);
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          flex
          flex-col
          gap-5
          rounded-2xl
          border
          border-cyan-100
          bg-white
          p-6
          shadow-lg
          sm:p-8
        "
      >
        {/* Heading */}
        <div className="mb-2 text-center">
          <h1 className="text-4xl font-bold text-cyan-500 sm:text-5xl">
            Log In
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
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
              text-base
              text-gray-700
              outline-none
              placeholder:text-gray-400
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-100
            "
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
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
              text-base
              text-gray-700
              outline-none
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
            mt-2
            w-full
            rounded-lg
            bg-cyan-500
            px-4
            py-3
            text-base
            font-semibold
            text-white
            transition
            hover:bg-cyan-600
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-300
            focus:ring-offset-2
          "
        >
          Log In
        </button>
      </form>
    </main>
  );
}

export default LogIn;