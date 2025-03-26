/* eslint-disable @next/next/no-img-element */
import content from '@/contents/ProjectsContent.json';
import { Badge } from '@/components/Badge';
import { supabase } from '@/utils/supabase';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

interface ProjectProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
  techStack: string;
}

function CardCarousel({
  id,
  title,
  description,
  imgUrl,
  techStack,
}: ProjectProps) {
  const stackArr = techStack.split(';');
  return (
    <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 ">
      <div className="bg-grey-100 p-1 max-h-[450px] flex flex-col justify-start border-zinc-100 rounded-lg">
        <div className="relative">
          <img
            src={imgUrl || '/placeholder.svg'}
            alt={title}
            className="object-cover max-h-[200px] w-full"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-[300px]">
          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-textColor">
              {title}
            </h2>
            <p className="text-gray-400 dark:text-linkColor mb-4 line-clamp-3">
              {description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {stackArr.slice(0, 4).map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </div>

          <Link href={`/project/${id}`}>
            <Button className="bg-grey-50 text-chipText hover:bg-chipBg/90 w-full ">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
}

export default async function Projects() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true });

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
      <Carousel
        opts={{
          loop: true,
        }}
        className="my-4"
      >
        <CarouselContent>
          {projects?.map((project) => {
            return (
              <CardCarousel
                key={project.id}
                id={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                previewUrl={project.previewUrl}
                techStack={project.techStack}
              />
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
