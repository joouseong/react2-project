import { posts } from "./posts";
import Link from "next/link";

export default function Blog2Page() {
  return (
    <div>
      <h1>블로그 목록</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog2/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
