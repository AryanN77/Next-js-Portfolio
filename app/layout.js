import "./globals.css";
import { Anton, Playfair_Display } from "next/font/google"
import { twMerge } from "tailwind-merge";
import Header from "./_components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: "400",
});
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

export const metadata = {
  title: "Aryan Naithani - Portfolio",
  description: "A Developer Portfolio showcasing my Skills & Projects",
  icons: {
    icon: '/logo.png' // Updated path for the 'public' directory
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(`${anton.variable} ${playfair.variable} antialiased`)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
