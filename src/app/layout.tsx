import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pasindu Pramodya | Link Page",
  description: "personal link sharing ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.svg" type="image/svg+xml" sizes="any" />
      <meta
        name="keywords"
        content="developer, pasindu pramodya,pasindu p konghawaththa,programmer, software engineer , software developer, web developer ,full stack developer, front end developer, website developer, github ,backend developer, java developer, portfolio,codeberg,littlelink"
      ></meta>
      <meta name="language" content="English"></meta>
      <meta name="author" content="pasindu pramodya"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
