import MainTitle from "@components/MainTitle";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import CityDonutChart from "./CityDonutChart";
import type { CityRankingData } from "@apis/cooperation/getCityRanking";

interface CountryCategoryProps {
  city: string;
  data: CityRankingData;
}

const CityRanking = ({ city, data }: CountryCategoryProps) => {
  return (
    <>
      <MainTitle
        title="어떤 나라와 가장 많은 자매결연과 우호교류를 맺고 있을까요?"
        subtitle="국내 지자체가 가장 많이 자매·우호도시를 맺은 국가들을 순위별로 확인할 수 있어요."
        marginTop="6.25rem"
        type="contentTitle"
      />
      <CountryDonutChartContainer>
        <DonutWrapper>
          <CityDonutChart city_ranking={data.city_ranking} />
        </DonutWrapper>
        <CountryDonutText>
          <h1>{city}의 자매 · 우호도시 보유국</h1>
          <p>{data.local_ratio_explain_detail}</p>
        </CountryDonutText>
      </CountryDonutChartContainer>
    </>
  );
};

const CountryDonutChartContainer = styled.section`
  display: flex;
  gap: 3.44rem;
  margin-top: 5rem;
`;

const DonutWrapper = styled.div`
  width: 261px;
  height: 261px;
  flex-shrink: 0;
`;

const CountryDonutText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;

  h1 {
    ${fonts.subtitle24B}
    color: ${({ theme }) => theme.colors.gray02};
  }

  p {
    color: ${({ theme }) => theme.colors.gray03};
    white-space: pre-line;
    ${fonts.body20M};
    line-height: 1.875rem;
  }
`;

export default CityRanking;
