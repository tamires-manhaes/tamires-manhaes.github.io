import { Badge } from '@/components/Badge';
import content from '@/contents/AboutMeContent.json';

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-8 px-8 mb-12">
      <div className="mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          <Badge fontSize="20px">Work Experience</Badge>
        </h2>
        <span className="block text-xl w-full text-center mx-auto">
          {content.workXPDescription}
        </span>
      </div>
      <ul className="space-y-6 flex flex-wrap justify-evenly items-stretch">
        {content.workXP.map((exp) => (
          <li
            key={exp.company}
            className="mx-1 my-0 w-full lg:w-[calc(100%/2-15px)] flex-wrap border-l-4 border-gray-300 rounded-md p-4 pl-4 flex flex-col md:flex-row justify-between items-center bg-grey-50"
          >
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-xl font-semibold dark:text-textColor">
                {exp.position}
              </h3>
              <strong>{exp.company}</strong>
              <span className="text-sm mb-1">{exp.description}</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm dark:text-linkColor">
                {exp.periodWorked}
              </p>
              <p className="mt-1 dark:text-textColor text-sm">
                {exp.type} - {exp.location}
              </p>
              <div className="flex flex-wrap my-2">
                {exp.skills?.map((skill) => (
                  <Badge key={skill} className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
