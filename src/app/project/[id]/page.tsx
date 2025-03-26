import { supabase } from '@/utils/supabase';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { illustrations } from '@/configs/illustrations';
import { Button } from '@/components/Button';
import Footer from '@/components/Footer';
import Readme from '@/components/Readme';
import { getReadme } from '@/utils/getReadme';
import { Badge } from '@/components/Badge';

export default async function ProjectDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const response = await supabase.from('projects').select('*').eq('id', id);
  const project = response.data?.[0];
  const stackArr = project.techStack.split(';');

  const markdown = await getReadme(project.githubUrl);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="flex items-center text-gray-600 dark:text-linkColor hover:text-gray-900 dark:hover:text-textColor mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="bg-boxBackground rounded-lg shadow-custom overflow-hidden mb-8">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={project.imgUrl || illustrations.placeholder}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 dark:text-textColor">
            {project.title}
          </h1>

          <p className="text-gray-700 dark:text-textColor mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 dark:text-textColor">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {stackArr.map((tech: string) => {
                return (
                  <Badge key={tech} className="px-2 py-2 text-sm">
                    {tech}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-[#333] hover:bg-[#444] text-white">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
            {project.previewUrl && (
              <Button
                asChild
                className="bg-zinc-600 text-chipText hover:bg-chipBg/90"
              >
                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-boxBackground rounded-lg shadow-custom p-6">
        <div className="prose dark:prose-invert max-w-none">
          <Readme markdown={markdown} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
