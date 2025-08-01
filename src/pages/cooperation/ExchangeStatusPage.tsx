import { useEffect, useState } from "react";

import Button from "@components/Button";
import FilterContainer from "@components/Filters/FilterContainer";
import MainTitle from "@components/MainTitle";
import ExchangeStatusTabs from "./components/ExchangeStatusTabs";
import CountryMap from "./components/country/CountryMap";
import CountryCategory from "./components/country/CountryCategory";
import { CITY_OPTIONS, COUNTRY_OPTIONS } from "@constants/filterOptions";
import {
  getCountryRatio,
  type CategoryRatioData,
} from "@apis/cooperation/getCountryRatio";
import CountryExchangeCase from "./components/country/CountryExchangeCase";
import {
  getCountryExchageCase,
  type ExchangeCaseData,
} from "@apis/cooperation/getCountryExchageCase";
import CountryYearGraph from "./components/country/CountryYearGraph";
import { getCountryYear } from "@apis/cooperation/getCountryYear";
import CityMap from "./components/city/CityMap";
import {
  getCityRelations,
  type CityRelationData,
} from "@apis/cooperation/getCityRelation";
import CityRanking from "./components/city/CityRanking";
import {
  getCityRanking,
  type CityRankingData,
} from "@apis/cooperation/getCityRanking";
import CityExchangeCard from "./components/city/CityExchangeCard";
import {
  getCityCategory,
  type CityCategoryItem,
} from "@apis/cooperation/getCityCategory";
import CityVision from "./components/city/CityVision";
import {
  getCityVision,
  type CityVisionData,
} from "@apis/cooperation/getCityVision";
import { useLanguage } from "src/hooks/useLanguage";

const ExchangeStatusPage = () => {
  const [activeTab, setActiveTab] = useState<"국가" | "지자체">("국가");
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const language = useLanguage();

  // 국가 선택 변경 시 isSubmitted 초기화
  const handleCountrySelect = (value: string) => {
    setCountry(value);
    setIsSubmitted(false);
  };

  // 지자체 선택 변경 시 isSubmitted 초기화
  const handleCitySelect = (value: string) => {
    setCity(value);
    setIsSubmitted(false);
  };

  //-------국가 탭--------------------------------//
  const [categoryData, setCategoryData] = useState<CategoryRatioData | null>(
    null
  );
  const [exchangeExamples, setExchangeExamples] = useState<ExchangeCaseData[]>(
    []
  );
  const [yearData, setYearData] = useState<{ year: number; value: number }[]>();

  const handleSearchClick = () => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && country) {
      getCountryRatio(country).then(setCategoryData);
      getCountryExchageCase(country).then(setExchangeExamples);
      getCountryYear(country).then((res) => {
        if (!res) return;

        const formatted = Object.entries(res.yearly_data_count).map(
          ([year, value]) => ({
            year: Number(year),
            value,
          })
        );

        setYearData(formatted);
      });
    }
  }, [isSubmitted, country]);

  //-------지자체 탭--------------------------------//
  const [cityRelationData, setCityRelationData] =
    useState<CityRelationData | null>(null);

  const [cityRankingData, setCityRankingData] =
    useState<CityRankingData | null>(null);

  const [cityCategoryData, setCityCategoryData] = useState<
    CityCategoryItem[] | null
  >(null);

  const [cityVisionData, setCityVisionData] = useState<CityVisionData | null>(
    null
  );
  useEffect(() => {
    if (isSubmitted && city) {
      getCityRelations(city).then(setCityRelationData);
      getCityRanking(city).then(setCityRankingData);
      getCityCategory(city).then(setCityCategoryData);
      getCityVision(city).then(setCityVisionData);
    }
  }, [isSubmitted, city]);

  return (
    <>
      <ExchangeStatusTabs
        active={activeTab}
        onChange={(tab) => {
          setActiveTab(tab);
          setIsSubmitted(false);
        }}
      />

      {activeTab === "국가" && (
        <>
          <MainTitle
            title="관심 있는 해외 국가와의 국제교류 현황을 한눈에 확인해보세요!"
            subtitle="선택한 국가와 우리나라 간의 협력 이력, 교류 분야 비율, 사업 수 추이를 확인할 수 있어요."
            rightBtn={
              <Button
                text="조회하기"
                img="/icons/arrowUpRight.svg"
                onClick={handleSearchClick}
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
                onSelect: handleCountrySelect,
                placeholder: language === "en" ? "Vietnam" : "베트남",
              },
            ]}
          />

          {isSubmitted && country && categoryData && (
            <>
              <CountryMap country={country} />
              <CountryCategory country={country} data={categoryData} />
              <CountryExchangeCase country={country} data={exchangeExamples} />
              <CountryYearGraph country={country} data={yearData} />
            </>
          )}
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
                onClick={handleSearchClick}
                disabled={!city}
              />
            }
          />

          <FilterContainer
            filters={[
              {
                title: "지방자치단체",
                options: CITY_OPTIONS,
                selected: city,
                onSelect: handleCitySelect,
                placeholder: language === "en" ? "Gyeonggi-do" : "경기도",
              },
            ]}
          />

          {isSubmitted &&
            city &&
            cityRelationData &&
            cityRankingData &&
            cityCategoryData &&
            cityVisionData && (
              <>
                <CityMap city={city} data={cityRelationData} />
                <CityRanking city={city} data={cityRankingData} />
                <CityExchangeCard city={city} data={cityCategoryData} />
                <CityVision city={city} data={cityVisionData} />
              </>
            )}
        </>
      )}
    </>
  );
};

export default ExchangeStatusPage;
