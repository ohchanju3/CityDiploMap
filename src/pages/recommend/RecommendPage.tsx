import Button from "src/components/Button";
import FilterContainer from "src/components/Filters/FilterContainer";
import MainTitle from "src/components/MainTitle";
import { useEffect, useState } from "react";
import {
  CATEGORY_OPTIONS,
  CITY_OPTIONS,
  COUNTRY_OPTIONS,
  PURPOSE_OPTIONS,
} from "@constants/filterOptions";
import ExchangeStrategy from "./components/ExchangeStrategy";
import {
  getExchangeStrategy,
  type ExchangeStrategyData,
} from "@apis/recommend/getExchangeStrategy";
import ExchangeProposal from "./components/ExchangeProposal";
import RecommendSummary from "./components/RecommendSummary";
import ExchangeInfo from "./components/ExchangeInfo";
import {
  getCountryInfo,
  type CountryInfoItem,
} from "@apis/recommend/getCountryInfo";
import ExchangeRecent from "./components/ExchangeRecent";
import { getTrendCountry, type TrendItem } from "@apis/main/getCountryTrends";
import ExchangeEnvIssue from "./components/ExchangeEnvIssue";
import { getEnvIssue, type EnvIssueItem } from "@apis/recommend/getEnvIssue";
import Spinner from "@components/Spinner";
import styled from "styled-components";
import { useLanguage } from "src/hooks/useLanguage";

const RecommendPage = () => {
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);
  const language = useLanguage();

  const isAllSelected = country && city && category && purpose;

  const handleSearchClick = () => {
    setIsSubmitted(true);
  };

  const filters = [
    {
      title: "지방자치단체",
      options: CITY_OPTIONS,
      selected: city,
      onSelect: setCity,
      placeholder: language === "en" ? "Gyeonggi-do" : "경기도",
    },
    {
      title: "국가",
      options: COUNTRY_OPTIONS,
      selected: country,
      onSelect: setCountry,
      placeholder: language === "en" ? "Vietnam" : "베트남",
    },
    {
      title: "교류분야",
      options: CATEGORY_OPTIONS,
      selected: category,
      onSelect: setCategory,
      placeholder:
        language === "en"
          ? "Health · Environment · Technology"
          : "보건 · 환경 · 기술",
    },
    {
      title: "협력 목적",
      options: PURPOSE_OPTIONS,
      selected: purpose,
      onSelect: setPurpose,
      placeholder:
        language === "en"
          ? "Strengthening Existing Partners"
          : "기존 협력 강화",
    },
  ];

  const [strategyData, setStrategyData] = useState<ExchangeStrategyData | null>(
    null
  );
  const [countryInfoData, setCountryInfoData] =
    useState<CountryInfoItem | null>(null);
  const [trendsData, setTrendsData] = useState<TrendItem[]>([]);
  const [envIssueData, setEnvIssueData] = useState<EnvIssueItem[]>([]);

  useEffect(() => {
    if (isSubmitted && isAllSelected) {
      getExchangeStrategy(city, country, category, purpose).then(
        setStrategyData
      );
      getCountryInfo(country).then(setCountryInfoData);
      getTrendCountry(country).then(setTrendsData);
      getEnvIssue(country).then(setEnvIssueData);
    }
  }, [isSubmitted, city, country, category, purpose]);

  useEffect(() => {
    setIsSubmitted(false);
  }, [city, country, category, purpose]);

  return (
    <>
      {isSubmitted && (!strategyData || !countryInfoData) ? (
        <Spinner
          text={
            <>
              <Blue>교류 전략 추천 결과</Blue>를 불러오고 있어요!
            </>
          }
        />
      ) : (
        <>
          <MainTitle
            title="우리 지자체에 꼭 맞는 교류 전략을 설계해보세요!"
            subtitle="선택하신 지자체와 국가, 교류 분야, 협력 목적에 맞춰 실현 가능성이 높은 교류 전략을 추천해드려요."
            rightBtn={
              <Button
                text="조회하기"
                img="/icons/arrowUpRight.svg"
                onClick={handleSearchClick}
                disabled={!isAllSelected}
              />
            }
          />
          <FilterContainer filters={filters} />
          {isAllSelected && isSubmitted && strategyData && countryInfoData && (
            <>
              {isPdfDownloading ? (
                <Spinner
                  text={
                    <>
                      <Blue>교류 전략 추천 결과</Blue>를 다운로드하고 있어요!
                    </>
                  }
                />
              ) : (
                <>
                  <ExchangeStrategy
                    city={city}
                    country={country}
                    data={strategyData}
                    onDownloadStart={() => setIsPdfDownloading(true)}
                    onDownloadEnd={() => setIsPdfDownloading(false)}
                  />
                  <ExchangeProposal data={strategyData} />
                  <RecommendSummary data={strategyData} />
                  <ExchangeInfo country={country} data={countryInfoData} />
                  <ExchangeRecent country={country} data={trendsData} />
                  <ExchangeEnvIssue country={country} data={envIssueData} />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
const Blue = styled.span`
  color: ${({ theme }) => theme.colors.blue01};
`;

export default RecommendPage;
