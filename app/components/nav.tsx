"use client";

import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-cyan-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold sm:text-3xl"
        >
          Foundation
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/pages/log-in"
            className="font-medium transition hover:text-cyan-200"
          >
            Log In
          </Link>

          <Link
            href="/pages/sign-up"
            className="rounded-md bg-white px-4 py-2 font-medium text-cyan-700 transition hover:bg-cyan-50"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-cyan-600 px-4 pb-4 sm:hidden">
          <div className="flex flex-col gap-2 pt-3">
            <Link
              href="/pages/log-in"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-3 py-2 font-medium transition hover:bg-cyan-600"
            >
              Log In
            </Link>

            <Link
              href="/pages/sign-up"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md bg-white px-3 py-2 font-medium text-cyan-700 transition hover:bg-cyan-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;