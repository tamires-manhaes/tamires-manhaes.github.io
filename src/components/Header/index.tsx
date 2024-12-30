"use client";

import Link from "next/link";
import NavBar from "../Navbar";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-boxBackground text-gray-900 dark:text-textColor shadow-custom">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tamires Pimenta
        </Link>
        <NavBar />
      </nav>
    </header>
  );
}
