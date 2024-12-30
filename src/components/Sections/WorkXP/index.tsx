import content from "@/contents/AboutMeContent.json";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-textColor">
        Work Experience
      </h2>
      <ul className="space-y-6">
        {content.workXP.map((exp) => (
          <li
            key={exp.company}
            className="border-l-4 border-gray-300 dark:border-linkColor pl-4 flex justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold dark:text-textColor">
                {exp.position}
              </h3>
              <strong>
                {exp.company} | {exp.level}
              </strong>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-gray-600 dark:text-linkColor">
                {exp.periodWorked}
              </p>
              <p className="mt-2 dark:text-textColor">
                {exp.type} - {exp.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
