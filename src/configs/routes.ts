export const routes = {
  home: "/",
  blog: "/blog",
  project: "/projects",
  article: (slug: string) => `/blog/${slug}`,
};
