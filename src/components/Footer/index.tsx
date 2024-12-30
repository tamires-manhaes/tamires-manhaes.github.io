import content from "@/contents/AboutMeContent.json";
export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-boxBackground text-gray-900 dark:text-textColor py-4 shadow-custom">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Tamires Manhães. All rights
          reserved.
        </p>
        <ul className="flex justify-center text-center">
          {content.contactMe.socialMedia.map((social) => {
            return (
              <li key={social.name} className="mx-2">
                <a href={social.url}>{social.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
