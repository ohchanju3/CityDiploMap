import { useEffect, useState } from "react";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import CountryTrendsContainer from "./components/CountryTrends/CountryTrendsContainer";
import { getTrendCountry, type TrendItem } from "@apis/main/getCountryTrends";
import DiplomacyEventList from "./components/DiplomacyEvent/DiplomacyEventList";
import { getDipEvent, type EventItem } from "@apis/main/getDipEvent";
import { useNavigate } from "react-router-dom";
import Banner from "./components/banners/Banner";
import MainTitle from "@components/MainTitle";
import TabSelector from "@components/TabSelector";

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
      const data = await getTrendCountry(selectedCountry);
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
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/citizen`);
  };

  return (
    <>
      <Banner />
      <MainTitle title="국가별 최신 동향" marginTop="5rem" />
      <TabSelector
        labelList={COUNTRY_LIST}
        selectedLabel={selectedCountry}
        onSelect={setSelectedCountry}
      />
      <CountryTrendsContainer data={trendsData} />

      <MainTitle
        title="공공외교 행사 안내"
        marginTop="6.25rem"
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
