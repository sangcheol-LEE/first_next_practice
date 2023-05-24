import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: Params;
}
interface Params {
  slug: string;
}
const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug}제품 설명 페이지 입니다.</div>;
};

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default PantsPage;
