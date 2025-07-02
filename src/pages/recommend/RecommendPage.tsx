import Button from "src/components/Button";
import FilterContainer from "src/components/Filters/FilterContainer";
import MainTitle from "src/components/MainTitle";
import { useState } from "react";
import {
  CATEGORY_OPTIONS,
  CITY_OPTIONS,
  COUNTRY_OPTIONS,
  PURPOSE_OPTIONS,
} from "@constants/filterOptions";

const RecommendPage = () => {
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<string | null>(null);

  const isAllSelected = country && city && category && purpose;

  const filters = [
    {
      title: "지방자치단체",
      options: CITY_OPTIONS,
      selected: city,
      onSelect: setCity,
      placeholder: "경기도",
    },
    {
      title: "국가",
      options: COUNTRY_OPTIONS,
      selected: country,
      onSelect: setCountry,
      placeholder: "베트남",
    },
    {
      title: "교류분야",
      options: CATEGORY_OPTIONS,
      selected: category,
      onSelect: setCategory,
      placeholder: "경제·통상",
    },
    {
      title: "협력 목적",
      options: PURPOSE_OPTIONS,
      selected: purpose,
      onSelect: setPurpose,
      placeholder: "기본 파트너 강화",
    },
  ];

  return (
    <>
      <MainTitle
        title="실행 가능한 교류 전략을 설계해보세요!"
        subtitle="선택한 국가와 조건에 따라 적합한 협력 방안을 제안해드려요."
        rightBtn={
          <Button
            text="조회하기"
            img="/icons/arrowUpRight.svg"
            onClick={() => alert("api 세팅 필요")}
            disabled={!isAllSelected}
          />
        }
      />
      <FilterContainer filters={filters} />;
    </>
  );
};

export default RecommendPage;
