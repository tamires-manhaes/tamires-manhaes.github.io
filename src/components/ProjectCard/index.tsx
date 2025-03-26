import { illustrations } from '@/configs/illustrations';
import Image from 'next/image';
import { Badge } from '../Badge';
import Link from 'next/link';

interface ProjectCardProps {
  readonly id: string;
  readonly imgURL: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
  readonly stack: string;
  readonly even: boolean;
}

export default function ProjectCard({
  id,
  imgURL,
  title,
  description,
  even,
  stack,
}: ProjectCardProps) {
  const stackArr = stack.split(';');
  return (
    <li
      key={id}
      className={`w-full flex flex-col flex-wrap justify-between ${even ? 'flex-col md:flex-row' : 'flex-col md:flex-row'} rounded-lg bg-grey-100 `}
    >
      <div className="w-full md:w-[50%] p-4 bg-grey-400 flex content-center justify-center">
        <Image
          src={imgURL || illustrations.placeholder}
          alt={title}
          width={300}
          height={200}
          className="w-full max-h-[300px]"
        />
      </div>
      <div className=" p-6 md:p-10 w-full md:w-[50%] flex justify-between flex-col">
        <div className="pr-8">
          <h3 className="text-2xl font-semibold mb-6 dark:text-textColor">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-linkColor mb-4  ">
            {description}
          </p>
          <ul>
            {stackArr.map((tech) => (
              <Badge key={tech} className="mr-2 mb-2 md:mb-1">
                {tech}
              </Badge>
            ))}
          </ul>
        </div>
        <Link
          href={`/project/${id}`}
          className="mt-5 md:mt-0 text-grey-400 dark:text-chipText hover:underline inline"
        >
          <span>Learn more</span>
        </Link>
      </div>
    </li>
  );
}
