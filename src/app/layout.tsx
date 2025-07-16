import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: 'GamerBox'
}
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
              {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}