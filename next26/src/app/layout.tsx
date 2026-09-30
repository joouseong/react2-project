import Link from "next/link";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>=== Root Layout Header ===</header>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/blog">Blog</Link> | 
          <Link href="/blog2">Blog2</Link> | 
          <Link href="/blog3">Blog3</Link> | 
          <Link href="/products">Products</Link> | 
          <a href="/contact"> Contact</a>
        </nav>
        <main>{children}</main>
        <footer>=== Root Layout Footer ===</footer>
      </body>
    </html>
  );
}
