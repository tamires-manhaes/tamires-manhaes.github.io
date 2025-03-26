import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

async function fetchReadme(githubUrl: string) {
  try {
    // Extract username and repo from GitHub URL
    const urlParts = githubUrl.replace('https://github.com/', '').split('/');
    const username = urlParts[0];
    const repo = urlParts[1];

    // Fetch README from GitHub API
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/readme`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.html',
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch README');
    }

    // GitHub API returns the README as HTML
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching README:', error);
    return '<p>Unable to load README. Please check the GitHub repository directly.</p>';
  }
}

async function ReadmeContent({ githubUrl }: { githubUrl: string }) {
  const readmeHtml = await fetchReadme(githubUrl);

  return (
    <div
      className="readme-content"
      dangerouslySetInnerHTML={{ __html: readmeHtml }}
    />
  );
}

export default function ProjectReadme({ githubUrl }: { githubUrl: string }) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-chipText" />
          <span className="ml-2 text-gray-600 dark:text-linkColor">
            Loading README...
          </span>
        </div>
      }
    >
      <ReadmeContent githubUrl={githubUrl} />
    </Suspense>
  );
}
