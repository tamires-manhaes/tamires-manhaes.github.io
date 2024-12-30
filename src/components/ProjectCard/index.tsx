import { illustrations } from "@/configs/illustrations";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  readonly id: string;
  readonly imgURL: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
}

export default function ProjectCard({
  id,
  imgURL,
  title,
  description,
  previewUrl,
}: ProjectCardProps) {
  return (
    <li
      key={id}
      className="border dark:border-boxBackground rounded-lg overflow-hidden bg-white dark:bg-boxBackground shadow-custom"
    >
      <Image
        src={imgURL || illustrations.placeholder}
        alt={title}
        width={300}
        height={200}
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-textColor">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-linkColor mb-4 truncate">
          {description}
        </p>
        <Link
          href={previewUrl}
          className="text-blue-500 dark:text-chipText hover:underline"
        >
          Learn more
        </Link>
      </div>
    </li>
  );
}
