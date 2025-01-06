import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RockmovePhotography",
  description: "rockmoveことRyuheiHosomiが撮った風景写真を紹介します。",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "rockmovePhotography",
    description: "rockmoveことRyuheiHosomiが撮った風景写真を紹介します。",
    url: "https://rockmovephotography.vercel.app/",
    images: [
      {
        url: "/ogp.jpg",
        width: 2048,
        height: 1366,
        alt: "元滝伏流水での光芒",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rockmovePhotography",
    description: "rockmoveことRyuheiHosomiが撮った風景写真を紹介します。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <div className='relative'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
