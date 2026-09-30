import Link from "next/link";

export default function Blog3Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>--- Blog3 Layout Header ---</header>
        <main>{children}</main>
        <footer>--- Blog3 Layout Footer ---</footer>
      </body>
    </html>
  );
}
