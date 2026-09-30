// generateStaticParams가 없는 경우
// blog2의 동적 라우트로 각 포스트의 slug에 대응하는 페이지를 렌더링
// 이 라우트는 generateStaticParams를 사용하지 않으므로 빌드타임이 아닌 런타임에
// params가 전달됨. App Router에서는 params가 Promise로 전달될 수 있으니
// 안전하게 사용하려면 await params로 값을 해제해야 함

import { posts } from "../posts";

export default async function Posts({
    params,
}: {
    // 런타임에서 전달되는 params는 Promise 형태일 수 있음
    params: Promise<{slug: string}>;
}) {
    // params를 await하여 실제 slug값을 얻음
    // (generateStaticParams가 없는 경우 런타임에서 슬러그를 해석하기 때문)
    const { slug } = await params; //params 해제
    const post = posts.find((p) => p.slug === slug);

    // 포스트를 찾지 못하면 간단한 404 메세지 반환
    // 실제 프로젝트에서는 Next.js의 notFound()를 호출하거나
    // 커스텀 404 컴포넌트를 렌더링하는 편이 좋음
    if(!post) {
        // 404 처리
        return (
            <h1>게시글을 찾을 수 없습니다.</h1>
        )
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}