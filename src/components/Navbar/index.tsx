"use client";

import { navbar } from "@/contents/navBar";
import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex space-x-4 items-center">
      {navbar.links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.url}
              className="hover:text-gray-600 dark:hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        );
      })}
      {/* <li>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </li> */}
    </ul>
  );
}
