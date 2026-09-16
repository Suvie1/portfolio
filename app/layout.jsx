import "./globals.css";

export const metadata = {
  title: "Joseph Omosuvie — Web & Email Design",
  description:
    "Portfolio of web design, email design, UX, content, and digital work by Joseph Omosuvie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
