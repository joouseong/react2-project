export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header>Marketing Layout Header</header>
        {children}
        <footer>Marketing Layout Footer</footer>
      </body>
    </html>
  );
}
