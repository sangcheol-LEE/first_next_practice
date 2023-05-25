import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: Params;
}
interface Params {
  slug: string;
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
    description: `멋진 제품을 확인해보세요 ${params.slug}`,
  };
}
const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug}제품 설명 페이지 입니다.</div>;
};

// 특정한 페이지를 ssg로 만들어 놓고 싶으면 아래 메서드를 사용해서 미리 정의 해둔다.
export function generateStaticParams() {
  const products = ["pants", "skirt", "shirt", "shoes"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default PantsPage;
