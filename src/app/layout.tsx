import { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";
import { Providers } from "./provider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "DevFinder",
  description:
    "An application to help pair programming with random devs online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <Providers>
            <NextTopLoader />
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
