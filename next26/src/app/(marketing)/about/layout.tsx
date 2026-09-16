export default function AboutLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>About Layout Header</header>
        <main>{children}</main>
        <footer>About Layout Footer</footer>
      </body>
    </html>
  );
}
