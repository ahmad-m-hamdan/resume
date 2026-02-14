import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Hamdan - Senior Full Stack Web Developer",
  description: "Professional resume showcasing 11+ years of web development experience",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  keywords: ["web developer", "resume", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
