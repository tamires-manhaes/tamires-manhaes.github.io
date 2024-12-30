interface PostCardProps {
  readonly url: string;
  readonly title: string;
  readonly date?: string;
  readonly published: boolean;
}

export default function PostCard({
  url,
  title,
  date,
  published,
}: PostCardProps) {
  return (
    <li key={url} className="border-b dark:border-boxBackground pb-4">
      <h2 className="text-2xl font-semibold mb-2">
        {published ? (
          <a
            href={url}
            target="_blank"
            className="hover:text-blue-500 dark:text-textColor dark:hover:text-violet-300"
          >
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      <p className="text-gray-600 dark:text-linkColor">
        {published ? date : "soon..."}
      </p>
    </li>
  );
}
