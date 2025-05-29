import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JSons Communications - Your Trusted Telemarketing Partner",
  description:
    "JSons Communications provides expert telemarketing services including sales, lead generation, and customer support solutions for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
