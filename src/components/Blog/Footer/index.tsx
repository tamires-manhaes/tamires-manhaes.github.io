import { routes } from "@/configs/routes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t dark:border-boxBackground">
      <p className="text-gray-600 dark:text-linkColor">
        Thanks for reading! Check out more of my work on the{" "}
        <Link
          href={routes.home}
          className="text-blue-500 dark:text-chipText hover:underline"
        >
          homepage
        </Link>
        .
      </p>
    </footer>
  );
}
