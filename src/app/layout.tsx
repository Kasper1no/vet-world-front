import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";
import '@/styles/color.css';
import '@/styles/base.css';
import '@/styles/font-awesome.min.css'
import "@/styles/icomoon.css";
import '@/styles/responsive.css';
import ClientComponent from "@/сomponents/ChildrenComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vet Svit",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="icon.ico" sizes="32x32" />
      </head>
      <body className={`${poppins.className} ${openSans.className}`}>
        <ClientComponent>
          {children}
        </ClientComponent>
      </body>
    </html>
  );
}
