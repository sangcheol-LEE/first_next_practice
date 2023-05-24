import React from "react";
import Link from "next/link";

const list: string[] = ["shirt", "pants", "skirt", "shoes"];

const ProductsPage = () => {
  return (
    <>
      <h1>제품 상세 페이지</h1>
      <section>
        {list.map((item, idx) => {
          return (
            <div key={idx}>
              <Link href={`/products/${item}`}>{item}</Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductsPage;
