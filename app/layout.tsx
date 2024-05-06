import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./main.scss";
import SessionProvider from "./components/SessionProvider";
import { Toaster } from "react-hot-toast";

const instrumentSans = Instrument_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <SessionProvider>
          <Toaster />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
