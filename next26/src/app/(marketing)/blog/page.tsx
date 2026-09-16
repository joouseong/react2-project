import { resolve } from "path";

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>Blog 페이지</div>
  );
}
