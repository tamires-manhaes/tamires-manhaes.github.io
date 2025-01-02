import content from "@/contents/ProjectsContent.json";
import ProjectCard from "@/components/ProjectCard";
import { isEven } from "@/utils/isEven";
import { Badge } from "@/components/Badge";

export default function Projects() {
  return (
    <section id="projects" className="py-8">
       <div className="mx-auto">
        <h2 className="text-2xl text-center placeholder:font-bold mb-4 dark:text-textColor">
          <Badge fontSize="20px">{content.title}</Badge>
        </h2>
        <span className="block text-xl w-full text-center mx-auto">
          {content.subtitle}
        </span>
      </div>
      <ul className=" px-12 grid md:grid-cols-1 gap-6 py-5">
        {content.projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              imgURL={project.imgUrl}
              title={project.title}
              description={project.description}
              previewUrl={project.previewUrl}
              even={isEven(index)}
              stack={project.techStack}
            />
          );
        })}
      </ul>
    </section>
  );
}
