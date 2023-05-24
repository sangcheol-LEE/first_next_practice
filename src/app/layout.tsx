import { Inter } from "next/font/google";
import CSS from "./layout.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ian's first Next.js app",
  description: "made by create next app...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={CSS.header}>
          <Link className={CSS.logo} href="/">
            Demo
          </Link>
          <nav className={CSS.nav}>
            <Link className={CSS.link} href="/products">
              Products
            </Link>
            <Link className={CSS.link} href="/contact">
              Contact
            </Link>
            <Link className={CSS.link} href="/about">
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
