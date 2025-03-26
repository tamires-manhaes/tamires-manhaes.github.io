import { Badge } from '@/components/Badge';
import content from '@/contents/MyTechStackCont.json';
import { supabase } from '@/utils/supabase';
import Image from 'next/image';

export default async function TechStack() {
  const { data: techs } = await supabase
    .from('tech-stack')
    .select('*')
    .order('id', { ascending: true });

  return (
    <section id="tech-stack" className="py-8 mb-6">
      <div className="mx-auto">
        <h2 className="text-2xl text-center placeholder:font-bold mb-4 dark:text-textColor">
          <Badge fontSize="20px">Skills</Badge>
        </h2>
        <span className="block text-xl w-full text-center mx-auto">
          {content.description}
        </span>
      </div>
      <ul className="flex items-center  justify-around flex-wrap py-6 px-8 md:px-0 gap-6">
        {techs?.map((tech) => {
          return (
            <li
              key={tech.id}
              className="w-[calc(100%/3-20px)]  md:w-[calc(100%/6-20px)] lg:w-[calc(100%/6-40px)] min-h-[150px] bg-chipBg text-chipText rounded-lg px-3 py-3 text-center flex flex-wrap items-center justify-center flex-col shadow-custom"
            >
              <Image
                className="mx-auto mb-3 "
                src={tech.iconUrl}
                alt={tech.name}
                width={80}
                height={80}
              />
              <span className="text-chipText">{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
