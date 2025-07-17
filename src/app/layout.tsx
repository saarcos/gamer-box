import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

export const metadata: Metadata = {
  title: 'GamerBox'
}
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
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