import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

// css import
import "./assets/css/aos.css";
import "./assets/css/style.css";
import "./assets/css/swiper-bundle.min.css";

export const metadata: Metadata = {
  title: "Nokturnal",
  description: "Developed By Nokturnal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link rel="icon" type="icon" href="assets/images/favicon.png" />
      </Head>
      <body className={`overflow-x-hidden`}>
        {children}
        <Script src="assets/js/swiper-bundle.min.js"></Script>
        <Script src="assets/js/vanilla-counter.js"></Script>
        <Script src="assets/js/aos.js"></Script>
        <Script src="assets/js/custom.js"></Script>
        <Script src="https://kit.fontawesome.com/42d5adcbca.js"></Script>
      </body>
    </html>
  );
}
