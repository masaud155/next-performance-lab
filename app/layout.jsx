import "./globals.css";

export const metadata = {
  title: "Next Performance Lab",
  description: "An interactive lab for learning seven practical Next.js performance habits."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
