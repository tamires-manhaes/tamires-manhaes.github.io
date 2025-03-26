'use client';

import { Button } from '@/components/Button';
import Layout from '@/components/Layout';
import { CornerDownLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BlogPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 dark:text-textColor">
            Blog Coming Soon
          </h1>
          <div className="w-24 h-1 bg-chipBg mx-auto mb-8"></div>

          <p className="text-lg mb-8 dark:text-textColor">
            Im currently working on some exciting content for my blog. Stay
            tuned for articles about frontend development, UI/UX design, and the
            latest web technologies.
          </p>

          <div className="mb-12 flex justify-center">
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
