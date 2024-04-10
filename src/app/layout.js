import { Inter } from "next/font/google";
import "./globals.css";
import { blogger } from "@/utils/constants";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata = {
  title: {
    default: "Home",
    template: `%s | ${blogger}'s Blog`,
    absolute: 'Home',
  },
  description: "This is a blog on travel and food place near the area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
