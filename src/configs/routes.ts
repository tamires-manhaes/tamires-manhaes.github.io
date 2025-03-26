export const routes = {
  home: '/',
  blog: '/blog',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  article: (slug: string) => `/blog/${slug}`,
};
