import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

<meta charset="utf-8">
    <title>Home V2 - Webflow HTML website template</title>
    <meta
        content="Coverly is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        name="description">
    <meta content="Home V2 - Webflow HTML website template" property="og:title">
    <meta
        content="Coverly is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="og:description">
    <meta content="Home V2 - Webflow HTML website template" property="twitter:title">
    <meta
        content="Coverly is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="twitter:description">
    <meta property="og:type" content="website">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Webflow" name="generator">
    <link
        href="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/css/coverly-template.webflow.shared.408268bb7.css"
        rel="stylesheet" type="text/css"
        integrity="sha384-QIJou3TJVOxHspKIzZhc5jDmgVvhD07iIr2GkSnxH6offxLWp5uM76GUIBFBcbKx" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700%7CLora:300,400,500,600,700" media="all">
    <script
        type="text/javascript">WebFont.load({ google: { families: ["Inter:300,400,500,600,700", "Lora:300,400,500,600,700"] } });</script>
    <script
        type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png"
        rel="shortcut icon" type="image/x-icon">
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png"
        rel="apple-touch-icon">
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const menuButton = document.querySelector('.menu'); // Use the class of the element that toggles the menu
            const overlay = document.querySelector('.nav_overlay');

            if (menuButton && overlay) {
                overlay.style.pointerEvents = "auto"; // Make sure the overlay is clickable
                overlay.addEventListener('click', function () {
                    menuButton.click(); // Simulates a menu click to close it
                });
            }
        });
    </script>
</head>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <div class="page-wrapper">
        <nav/>
    <div class="main-wrapper">
        {children}
        <footer/>
        </div>
        </div>
         <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=684f91df71b424da63a64df2"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.schunk.36b8fb49256177c8.js"
        type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G"
        crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.schunk.bfc1b07bf7feb992.js"
        type="text/javascript" integrity="sha384-owA8/L0avQ2U4Wx6xHdNuZi5Y13sRB+8SWGby1XKbeW+N+BncZ2KB8YVwkZcfwQ4"
        crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/js/webflow.92c8fc41.988f4472570ace96.js"
        type="text/javascript" integrity="sha384-JJz/m/4HaWyn01ZG2yJtSa373zlqap6frcLQ4DUVQTgaWHvHbhvq9gaV7dL2Pcdd"
        crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
