import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'GamerBox'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="max-w-screen bg-dark-gray">
            <Navbar />
          </div>
          <div className="pt-[78px]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}