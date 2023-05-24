import React from "react";
import style from "./layout.module.css";
import Link from "next/link";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <Link href="/products/man">남성복</Link>
        <Link href="/products/women">여성복</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
