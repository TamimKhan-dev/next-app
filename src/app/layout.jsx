import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NavbarWrapper from "@/components/Shared/Navbar/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ComTech",
  description: "Welcome to ComTech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <div className="flex flex-col min-h-screen">
          <NavbarWrapper />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
