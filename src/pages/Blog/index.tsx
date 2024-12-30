import PostCard from "@/components/Blog/PostCard";
import blog from "@/contents/BlogPosts.json";

export default function BlogPage() {
  return (
    <ul className="space-y-6 ">
      {blog.posts.map((post) => (
        <PostCard
          key={post.title}
          url={post.url}
          title={post.title}
          published={post.published}
          date={post.date}
        />
      ))}
    </ul>
  );
}
