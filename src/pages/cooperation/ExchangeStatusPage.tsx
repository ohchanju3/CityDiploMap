// 교류 협력 현황 페이지

import Button from "@components/Button";
import FilterContainer from "@components/Filters/FilterContainer";
import MainTitle from "@components/MainTitle";
import { useState } from "react";

const ExchangeStatusPage = () => {
  const [country, setCountry] = useState<string | null>(null);

  const filters = [
    {
      title: "국가",
      options: [
        "베트남",
        "우주베키스탄",
        "인도네시아",
        "콜롬비아",
        "에티오피아",
      ],
      selected: country,
      onSelect: setCountry,
      placeholder: "베트남",
    },
  ];

  return (
    <>
      <MainTitle
        title="관심 있는 해외 국가와의 국제교류 현황을 한눈에 확인해보세요!"
        subtitle="선택한 국가와 우리나라 간의 협력 이력, 교류 분야 비율, 사업 수 추이를 확인할 수 있어요."
        rightBtn={
          <Button
            text="조회하기"
            img="/icons/arrowUpRight.svg"
            onClick={() => alert("api 세팅 필요")}
            disabled={!country}
          />
        }
      />
      <FilterContainer filters={filters} />;
    </>
  );
};

export default ExchangeStatusPage;
