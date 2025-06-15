import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../lib/providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a Full Stack Developer",
  keywords: [
    "Portfolio",
    "Full Stack Developer",
    "Luke Harris",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Luke Harris" }],
  openGraph: {
    title: "Luke Harris - Full Stack Developer",
    description: "Explore my portfolio showcasing my skills and projects.",
    url: "https://lukeharris.dev",
    siteName: "Luke Harris Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Harris - Full Stack Developer",
    description: "Explore my portfolio showcasing my skills and projects.",
    creator: "@LukeZHar",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
