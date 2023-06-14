import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Shad Blog",
  description: "A blog about software development and other things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
        <Navbar />
        <div className="flex min-h-screen flex-col container py-16">
          {children}
        </div>
        </Provider>
      </body>
    </html>
  );
}
