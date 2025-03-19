import { Badge } from '@/components/Badge';
import content from '@/contents/MyTechStackCont.json';
import Image from 'next/image';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-8 mb-12">
      <div className="mx-auto">
        <h2 className="text-2xl text-center placeholder:font-bold mb-4 dark:text-textColor">
          <Badge fontSize="20px">Skills</Badge>
        </h2>
        <span className="block text-xl w-full text-center mx-auto">
          {content.description}
        </span>
      </div>
      <ul className="flex items-center  justify-around flex-wrap py-6 px-8 md:px-0 gap-6">
        {content.stacks.map((tech) => (
          <li
            key={tech.alt}
            className="w-[calc(100%/3-20px)]  md:w-[calc(100%/5-20px)] lg:w-[calc(100%/6-40px)] min-h-[150px] bg-chipBg text-chipText rounded-lg px-3 py-3 text-center flex flex-wrap items-center justify-center flex-col shadow-custom"
          >
            <Image
              className="mx-auto mb-3"
              src={tech.iconUrl}
              alt={tech.alt}
              width={75}
              height={75}
            />
            <span className="text-chipText">{tech.alt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
