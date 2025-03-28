import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Umesh Nagare | Full Stack Developer & Web Portfolio",
  description:
    "Explore Umesh Nagare’s portfolio, featuring cutting-edge full-stack web development projects built with modern technologies",
  keywords: [
    "Umesh Nagare",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  creator: "Umesh Nagare",
  openGraph: {
    title: "Umesh Nagare | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using modern web technologies.",
    url: "https://umeshnagare.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/umeshn22",
    title: "Umesh Nagare | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using Next.js, React, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
