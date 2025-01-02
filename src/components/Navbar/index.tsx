'use client';

import { navbar } from '@/contents/navBar';
import Link from 'next/link';

export default function NavBar() {
  return (
    <ul className="flex space-x-4 items-center">
      {navbar.links.map((link) => {
        return (
          <li key={link.name}>
            <Link href={link.url} className="text-grey-500 hover:text-gray-800">
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
