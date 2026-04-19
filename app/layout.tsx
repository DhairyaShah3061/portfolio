import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhairya Shah — Developer & Founder",
  description:
    "Computer Science undergrad, full-stack developer, and founder of Prothsahan — building scalable digital systems and growth infrastructure for businesses.",
  keywords: [
    "Dhairya Shah",
    "Web Developer",
    "Full Stack",
    "React",
    "Next.js",
    "Prothsahan",
    "Portfolio",
    "Anand Gujarat",
  ],
  authors: [{ name: "Dhairya Shah", url: "https://github.com/DhairyaShah3061" }],
  openGraph: {
    title: "Dhairya Shah — Developer & Founder",
    description:
      "Computer Science undergrad, full-stack developer, and founder of Prothsahan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
