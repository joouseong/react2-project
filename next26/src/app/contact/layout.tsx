import Link from "next/link";

export default function ContactLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>--- Contact Layout Header ---</header>
        <main>{children}</main>
        <footer>--- Contact Layout Footer ---</footer>
      </body>
    </html>
  );
}
