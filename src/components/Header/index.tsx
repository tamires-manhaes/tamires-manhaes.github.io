"use client";

import Link from "next/link";
import NavBar from "../Navbar";
import Image from "next/image";
import { illustrations } from "@/configs/illustrations";

export default function Header() {
  return (
    <header className="min-w-full px-8 py-2 flex content-center justify-between bg-grey-default text-gray-900 dark:text-textColor shadow-custom">
      <Link href="/" className="text-xl font-bold">
        <Image src={illustrations.logo} width={150} height={50} alt="logo" />
      </Link>
      <NavBar />
    </header>
  );
}
