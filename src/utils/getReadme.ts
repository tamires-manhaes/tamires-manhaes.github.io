export async function getReadme(repo: string): Promise<string> {
  const repoName = repo.split('github.com/')[1];
  const readmeUrl = `https://raw.githubusercontent.com/${repoName}/master/README.md`;
  const response = await fetch(readmeUrl);
  return response.text();
}
