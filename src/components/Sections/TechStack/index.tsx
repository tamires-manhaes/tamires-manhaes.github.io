import content from "@/contents/MyTechStackCont.json";
import Image from "next/image";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-textColor">
        Tech Stack
      </h2>
      <span>{content.description}</span>
      <ul className="flex items-center justify-center flex-wrap py-6 gap-6">
        {content.stacks.map((tech) => (
          <li
            key={tech.alt}
            className="w-[calc(100%/5-40px)] min-h-[150px] bg-chipBg text-chipText rounded-lg px-3 py-3 text-center flex flex-wrap items-center justify-center flex-col shadow-custom"
          >
            <Image
              className="mx-auto mb-3"
              src={tech.iconUrl}
              alt={tech.alt}
              width={85}
              height={85}
            />
            <span className="text-chipText">{tech.alt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
