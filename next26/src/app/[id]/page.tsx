import { posts } from "@/lib/data";
import LikeButton from "@/ui/LikeButton";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // posts에서 슬러그에 해당하는 포스트 찾기
  // getPost 대신 직접 posts 배열에서 찾기
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <LikeButton likes={post.likes} />
      </main>
    </>
  );
}
