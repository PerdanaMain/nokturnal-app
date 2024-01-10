import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

// css import
import "../assets/css/dashboard.css";

export const metadata: Metadata = {
  title: "Dashboard - Nocturnal",
  description: "Developed By Nocturnal",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
        <Script src="assets/js/orders.js"></Script>
        <Script src="assets/js/index.js"></Script>
      </body>
    </html>
  );
};

export default Layout;
