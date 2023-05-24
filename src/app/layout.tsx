import { Inter } from "next/font/google";
import CSS from "./layout.module.css";
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
          <h1>Demo</h1>
          <nav className={CSS.nav}>
            <a href="">Contact</a>
            <a href="">About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
