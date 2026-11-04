import ThemeProvider from "@/components/ThemeProvider";
import ThemeStatus from "@/components/ThemeStatus";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header>
            <p>=== Root Layout Header ===</p>
            <ThemeStatus />
            <nav>
              <Link href="/">Home</Link> |&nbsp;
              <Link href="/counter">Counter</Link> |&nbsp;
              <Link href="/interleaved">Interleaved</Link> |&nbsp;
              {/* <Link href="/blog">Blog</Link> |&nbsp;
            <Link href="/blog2">Blog2</Link> |&nbsp;
            <Link href="/blog3">Blog3</Link> |&nbsp;
            <Link href="/about">About</Link> |&nbsp;
            <Link href="/contact">Contact</Link> |&nbsp;
            <Link href="/products">Products</Link> */}
              <br />
              <br />
              Slug Page Menu : &nbsp;
              <Link href="/nextjs">nextjs</Link> | &nbsp;
              <Link href="/routing">routing</Link> | &nbsp;
              <Link href="/ssr-ssg">ssr-ssg</Link> | &nbsp;
              <Link href="/dynamic-routes">dynamic-routes</Link>
              <br />
            </nav>
            <br />
            <br />
          </header>
          <main>{children}</main>
          <footer>=== Root Layout Footer ===</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
