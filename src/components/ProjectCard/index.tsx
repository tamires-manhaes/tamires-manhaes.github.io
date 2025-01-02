import { illustrations } from "@/configs/illustrations";
import Image from "next/image";
import { Badge } from "../Badge";

interface ProjectCardProps {
  readonly id: string;
  readonly imgURL: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
  readonly stack: string[];
  readonly even: boolean;
}

export default function ProjectCard({
  id,
  imgURL,
  title,
  description,
  previewUrl,
  even,
  stack
}: ProjectCardProps) {
  return (
    <li
      key={id}
      className={`w-full flex flex-wrap justify-between ${even ? 'flex-row' : 'flex-row-reverse'}   rounded-lg overflow-hidden bg-grey-100 `}
    >
      <div className="w-[50%] p-4 bg-grey-400 flex content-center justify-center">
        <Image
          src={imgURL || illustrations.placeholder}
          alt={title}
          width={300}
          height={200}
          className="w-full max-h-[350px]"
        />
      </div>
      <div className="p-10 w-[50%] flex justify-between flex-col">
        <div className="pr-8">
          <h3 className="text-2xl font-semibold mb-6 dark:text-textColor">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-linkColor mb-4  ">
            {description}
          </p>
          <ul>
            {stack.map((tech) => (
              <Badge key={tech} className="mr-2">{tech}</Badge>
            ))}
          </ul>
        </div>
        <a
          href={previewUrl}
          target="_blank"
          className="text-grey-400 dark:text-chipText hover:underline"
        >
          Learn more
        </a>
      </div>
    </li>
  );
}
