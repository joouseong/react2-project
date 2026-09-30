import Link from "next/link";

export default function Blog2Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>--- Blog2 Layout Header ---</header>
        <main>{children}</main>
        <footer>--- Blog2 Layout Footer ---</footer>
      </body>
    </html>
  );
}
