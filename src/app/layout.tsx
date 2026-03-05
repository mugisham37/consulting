import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Elev8 Advisory & Investment Consultancy | Rwanda Investment Experts",
  description: "Expert investment advisory for foreign investors in Rwanda. Company registration, mining licensing, regulatory compliance, and strategic guidance for Rwanda market entry.",
  openGraph: {
    title: "Elev8 Advisory & Investment Consultancy | Rwanda Investment Experts",
    description: "Expert investment advisory for foreign investors in Rwanda. Company registration, mining licensing, regulatory compliance, and strategic guidance for Rwanda market entry.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elev8 Advisory & Investment Consultancy | Rwanda Investment Experts",
    description: "Expert investment advisory for foreign investors in Rwanda. Company registration, mining licensing, regulatory compliance, and strategic guidance for Rwanda market entry.",
  },
  generator: "Webflow",
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/css/coverly-template.webflow.shared.408268bb7.css"
          rel="stylesheet"
          type="text/css"
          integrity="sha384-QIJou3TJVOxHspKIzZhc5jDmgVvhD07iIr2GkSnxH6offxLWp5uM76GUIBFBcbKx"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700%7CLora:300,400,500,600,700"
          media="all"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Inter:300,400,500,600,700", "Lora:300,400,500,600,700"] } });`}
        </Script>
        <Script id="w-mod-js" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
        <Script id="menu-overlay" strategy="afterInteractive">
          {`
            document.addEventListener("DOMContentLoaded", function () {
              const menuButton = document.querySelector('.menu');
              const overlay = document.querySelector('.nav_overlay');

              if (menuButton && overlay) {
                overlay.style.pointerEvents = "auto";
                overlay.addEventListener('click', function () {
                  menuButton.click();
                });
              }
            });
          `}
        </Script>
      </head>
      <body>
        <div className="page-wrapper">
          <Nav />
          <div className="main-wrapper">
            {children}
            <Footer />
          </div>
        </div>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=684f91df71b424da63a64df2"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.schunk.36b8fb49256177c8.js"
          integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.schunk.bfc1b07bf7feb992.js"
          integrity="sha384-owA8/L0avQ2U4Wx6xHdNuZi5Y13sRB+8SWGby1XKbeW+N+BncZ2KB8YVwkZcfwQ4"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.92c8fc41.988f4472570ace96.js"
          integrity="sha384-JJz/m/4HaWyn01ZG2yJtSa373zlqap6frcLQ4DUVQTgaWHvHbhvq9gaV7dL2Pcdd"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
