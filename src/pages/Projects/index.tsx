'use client';

import { Button } from '@/components/Button';
import Layout from '@/components/Layout';
import { Code, CornerDownLeft, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ProjectsPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 dark:text-textColor">
            Projects Launching Soon
          </h1>
          <div className="w-24 h-1 bg-chipBg mx-auto mb-8"></div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <Code className="text-chipText h-16 w-16 absolute -left-8 -top-4 opacity-30" />
              <Rocket className="text-chipText h-20 w-20" />
              <Code className="text-chipText h-16 w-16 absolute -right-8 -bottom-4 opacity-30" />
            </div>
          </div>

          <p className="text-lg mb-8 dark:text-textColor">
            Im currently putting the finishing touches on my project showcase.
            Soon youll be able to explore my portfolio of web applications,
            responsive designs, and interactive experiences.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-lg bg-boxBackground dark:bg-background border border-chipBg/30 shadow-custom"
              ></div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <Button onClick={() => router.back()}>
              <CornerDownLeft className="size-4" />
              <span>Go back</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
