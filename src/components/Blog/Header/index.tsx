import { routes } from "@/configs/routes";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-textColor">Blog</h1>
      <nav>
        <Link
          href={routes.blog}
          className="text-blue-500 dark:text-chipText hover:underline"
        >
          ← Back to all posts
        </Link>
      </nav>
    </header>
  );
}
