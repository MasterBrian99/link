import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
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
      <Script id="microsoft-clarity-analytics">
        {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "oe053zd2hq");

  `}
      </Script>
    </html>
  );
}
