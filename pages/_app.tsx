import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "../app/provider";
import { AppProps } from "next/app";
import Head from "next/head";
import { Toast, ToastProvider } from "@/components/ui/toast";
import { metadata } from "@/app/layout";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Provider>
        <Navbar />
        <ToastProvider>
          <div className={`flex min-h-screen flex-col container py-16 items-center`}>
            <Component {...pageProps} />
            <Toast />
          </div>
        </ToastProvider>
      </Provider>
    </div>
  );
}
