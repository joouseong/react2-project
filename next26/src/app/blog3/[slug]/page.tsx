import { notFound } from "next/navigation";
import { posts } from "../posts";

export async function generateStaticParams(){
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Posts({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if(!post) {
        // 404 처리
        notFound();
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}