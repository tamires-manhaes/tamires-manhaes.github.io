import TypingAnimation from '@/components/TypingWordAnimation';
import content from '@/contents/AboutMeContent.json';
import { useIconsDict } from '@/hooks/use-icons-dict';
import { FaLocationDot } from 'react-icons/fa6';

export default function About() {
  const { fetchIcon } = useIconsDict();
  return (
    <section id="about" className="py-8 px-8">
      <h2 className="text-5xl font-bold mb-6 dark:text-textColor">
        <TypingAnimation text={`Hi, I'm Tamires!`} />
      </h2>

      <p className="text-lg dark:text-textColor">{content.descrition}</p>
      <div className="mt-5">
        <div className="flex content-center justify-start">
          <FaLocationDot size={22} className="mr-2" />
          <span className="text-lg">{content.location}</span>
        </div>
        <ul className="flex content-center mt-4">
          {content.contactMe.socialMedia.map((social) => {
            return (
              <a
                href={social.url}
                target="_blank"
                key={social.url}
                className="mx-2"
              >
                {fetchIcon(social.name, 28)}
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
