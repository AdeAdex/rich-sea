import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { MantineProvider } from "@mantine/core";
// import "@mantine/carousel/styles.css";

// Google font: Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust as needed
  variable: "--font-inter",
  display: "swap",
});

// Google font: Raleway
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust as needed
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rich Sea App",
  description: "Created by Keila Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} antialiased flex`}>
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
