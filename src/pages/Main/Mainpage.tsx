import { useEffect, useState } from "react";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import MainTitle from "src/components/Title/MainTitle";
import CountryTrendsContainer from "./components/CountryTrends/CountryTrendsContainer";
import {
  fetchTrendsByCountry,
  type TrendItem,
} from "@apis/main/getCountryTrends";
import DiplomacyEventList from "./components/DiplomacyEvent/DiplomacyEventList";
import { getDipEvent, type EventItem } from "@apis/main/getDipEvent";
import { useNavigate } from "react-router-dom";

const COUNTRY_LIST = [
  "전체",
  "베트남",
  "우즈베키스탄",
  "인도네시아",
  "콜롬비아",
  "에티오피아",
];

const Mainpage = () => {
  const [selectedCountry, setSelectedCountry] = useState("전체");
  const [trendsData, setTrendsData] = useState<TrendItem[]>([]);
  const [EventData, setEventData] = useState<EventItem[]>([]);

  useEffect(() => {
    const loadTrends = async () => {
      const data = await fetchTrendsByCountry(selectedCountry);
      setTrendsData(data);
    };

    loadTrends();
  }, [selectedCountry]);

  useEffect(() => {
    const loadEvent = async () => {
      const data = await getDipEvent();
      setEventData(data);
    };

    loadEvent();
  });

  const navigate = useNavigate();

  //TODO: 경로 수정 필요 ~~
  const handleClick = () => {
    navigate(`/my`);
  };

  return (
    <>
      <MainTitle title="국가별 최신 동향" />
      <CountryTabWrapper>
        {COUNTRY_LIST.map((country) => (
          <CountryTab
            key={country}
            $isActive={selectedCountry === country}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </CountryTab>
        ))}
      </CountryTabWrapper>
      <CountryTrendsContainer data={trendsData} />

      <MainTitle
        title="공공외교 행사 안내"
        rightBtn={
          <>
            <RightBtnWrapper onClick={handleClick}>
              <p>더보기</p>
              <img src="/icons/more.svg" />
            </RightBtnWrapper>
          </>
        }
      />
      <DiplomacyEventList data={EventData} />
    </>
  );
};

const CountryTabWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.88rem;
  margin-top: 2.81rem;
`;

const CountryTab = styled.section<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.25rem;
  height: 2.5rem;
  min-width: 3.5rem;
  border-bottom: 3px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.blue01 : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.blue01 : theme.colors.gray02};
  cursor: pointer;
  ${fonts.body18S}
`;

const RightBtnWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  ${fonts.body18M}
  color: ${({ theme }) => theme.colors.gray02};
  cursor: pointer;
`;
export default Mainpage;
