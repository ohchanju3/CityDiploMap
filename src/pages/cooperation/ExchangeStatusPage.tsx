import { useState } from "react";

import Button from "@components/Button";
import FilterContainer from "@components/Filters/FilterContainer";
import MainTitle from "@components/MainTitle";
import ExchangeStatusTabs from "./components/ExchangeStatusTabs";
import { CITY_OPTIONS, COUNTRY_OPTIONS } from "src/constants/filterOptions";

const ExchangeStatusPage = () => {
  const [activeTab, setActiveTab] = useState<"국가" | "지자체">("국가");
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  return (
    <>
      <ExchangeStatusTabs active={activeTab} onChange={setActiveTab} />

      {activeTab === "국가" && (
        <>
          <MainTitle
            title="관심 있는 해외 국가와의 국제교류 현황을 한눈에 확인해보세요!"
            subtitle="선택한 국가와 우리나라 간의 협력 이력, 교류 분야 비율, 사업 수 추이를 확인할 수 있어요."
            rightBtn={
              <Button
                text="조회하기"
                img="/icons/arrowUpRight.svg"
                onClick={() => alert("국가 API 호출")}
                disabled={!country}
              />
            }
          />
          <FilterContainer
            filters={[
              {
                title: "국가",
                options: COUNTRY_OPTIONS,
                selected: country,
                onSelect: setCountry,
                placeholder: "베트남",
              },
            ]}
          />
        </>
      )}

      {activeTab === "지자체" && (
        <>
          <MainTitle
            title="관심 있는 우리나라 지자체의 국제교류 관련 정보를 확인해보세요!"
            subtitle="선택한 지자체의 자매·우호도시 현황, 주요 교류 분야, 비전 및 추진과제를 확인할 수 있어요."
            rightBtn={
              <Button
                text="조회하기"
                img="/icons/arrowUpRight.svg"
                onClick={() => alert("지자체 API 호출")}
                disabled={!city}
              />
            }
          />
          <FilterContainer
            filters={[
              {
                title: "국가",
                options: CITY_OPTIONS,
                selected: city,
                onSelect: setCity,
                placeholder: "경기도",
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default ExchangeStatusPage;
