import content from "@/contents/AboutMeContent.json";

export default function About() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-textColor">About Me</h2>
      <p className="text-lg dark:text-textColor">{content.descrition}</p>
    </section>
  );
}
