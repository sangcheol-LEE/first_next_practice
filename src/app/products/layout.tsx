import React from "react";
import style from "./layout.module.css";
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <a href="">남성복</a>
        <a href="">여성복</a>
      </nav>
      <section>{children}</section>
    </>
  );
}
