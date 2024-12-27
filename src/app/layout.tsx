import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RockmovePhotography",
  description: "rockmoveことRyuheiHosomiが撮った風景写真を紹介します。",
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
