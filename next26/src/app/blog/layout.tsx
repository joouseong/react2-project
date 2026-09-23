import Link from "next/link";

export default function BlogLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>--- Blog Layout Header ---</header>
        <main>{children}</main>
        <footer>--- Blog Layout Footer ---</footer>
      </body>
    </html>
  );
}
