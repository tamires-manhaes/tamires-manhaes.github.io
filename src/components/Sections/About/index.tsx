import { Contacts } from '@/components/Contacts';
import TypingAnimation from '@/components/TypingWordAnimation';
import content from '@/contents/AboutMeContent.json';
import { FaLocationDot } from 'react-icons/fa6';

export default function About() {
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
        <Contacts />
      </div>
    </section>
  );
}
