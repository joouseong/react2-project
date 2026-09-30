import { posts } from "./posts";
import Link from "next/link";

export default function Blog3Page() {
  return (
    <div>
      <h1>블로그 목록</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog3/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
