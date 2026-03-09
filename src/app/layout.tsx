import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

// Load Poppins font with Next.js optimization for better performance
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elev8 Advisory - Investment Facilitation & Market Entry Advisory",
  description: "Helping international investors establish and operationalize businesses in Rwanda through strategic guidance, institutional navigation, and access to trusted professional partners.",
  openGraph: {
    title: "Elev8 Advisory - Investment Facilitation & Market Entry Advisory",
    description: "Helping international investors establish and operationalize businesses in Rwanda through strategic guidance, institutional navigation, and access to trusted professional partners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elev8 Advisory - Investment Facilitation & Market Entry Advisory",
    description: "Helping international investors establish and operationalize businesses in Rwanda through strategic guidance, institutional navigation, and access to trusted professional partners.",
  },
  keywords: ["Rwanda investment", "market entry Rwanda", "business setup Rwanda", "investment advisory", "Kigali business", "Rwanda business registration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body 
        className={`${poppins.className} antialiased`}
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <Nav />
        <div className="overflow-clip">
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
