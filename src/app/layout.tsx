import { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";
import { Providers } from "./provider";

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
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
