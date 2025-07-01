'use client';

import Link from 'next/link';
import NavBar from '../Navbar';
import Image from 'next/image';
import { illustrations } from '@/configs/illustrations';

export default function Header() {
  return (
    <header className=" max-w-[1300px] w-full mx-auto px-8 py-2 pt-8 mb:pt-12 flex content-center justify-between bg-grey-default text-gray-900 dark:text-textColor shadow-custom">
      <Link href="/" className="text-xl font-bold hidden md:block">
        <Image src={illustrations.logo} width={200} height={50} alt="logo" />
      </Link>
      <NavBar />
    </header>
  );
}
