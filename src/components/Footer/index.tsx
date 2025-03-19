import { illustrations } from '@/configs/illustrations';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-grey-default dark:bg-boxBackground text-gray-500 dark:text-textColor py-4 shadow-custom">
      <div className="container mx-auto px-4 text-center flex items-center justify-center flex-col">
        <Image
          src={illustrations.logo}
          width={200}
          height={50}
          alt="logo"
          className="mb-4"
        />
        <p>
          &copy; {new Date().getFullYear()} Tamires Manhães. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
