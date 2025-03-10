import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderBar from "../component/header.component";
import Sidebar, { SidebarProvider } from "../component/sidebar.component";
import Footer from "@/component/footer.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IGN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}>
        <SidebarProvider>
          <HeaderBar />
          <div className="sm:grid sm:grid-cols-[300px_1fr] sm:h-screen sm:max-w-[1536px] overflow-x-hidden">
            <div className="sm:sticky fixed sm:left-0 top-0 max-w-full z-[99999]">
              <Sidebar />
            </div>
            <main className="sm:w-auto max-sm:w-screen flex flex-col overflow-y-auto">
              <div>{children}</div>
              <Footer />
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
