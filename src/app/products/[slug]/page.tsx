import React from "react";

interface Props {
  params: Params;
}

interface Params {
  slug: string;
}
const PantsPage = ({ params }: Props) => {
  return <div>{params.slug}제품 설명 페이지 입니다.</div>;
};

export default PantsPage;
