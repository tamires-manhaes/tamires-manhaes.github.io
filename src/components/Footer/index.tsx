
export default function Footer() {

  return (
    <footer className="w-full bg-grey-default dark:bg-boxBackground text-gray-500 dark:text-textColor py-4 shadow-custom">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Tamires Manhães. All rights
          reserved.
        </p>
       
      </div>
    </footer>
  );
}
