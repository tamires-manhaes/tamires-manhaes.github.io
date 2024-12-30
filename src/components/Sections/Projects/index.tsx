import content from "@/contents/ProjectsContent.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-textColor">
        {content.title}
      </h2>
      <span>{content.subtitle}</span>
      <ul className="grid md:grid-cols-4 gap-6 py-5">
        {content.projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imgURL={project.imgUrl}
            title={project.title}
            description={project.description}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
}
