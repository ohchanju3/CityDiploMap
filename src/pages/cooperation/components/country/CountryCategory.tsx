import MainTitle from "@components/MainTitle";
import { withPostposition } from "@utils/postPosition";
import CountryDonutChart from "./CountryDonutChart";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import type { CategoryRatioData } from "@apis/cooperation/getCountryRatio";

interface CountryCategoryProps {
  country: string;
  data: CategoryRatioData;
}

const CountryCategory = ({ country, data }: CountryCategoryProps) => {
  const countryWithPost = country
    ? withPostposition(country, ["과", "와"])
    : "";

  return (
    <>
      <MainTitle
        title="어떤 분야에서 활발히 교류하고 있을까요?"
        subtitle={`${countryWithPost}의 교류가 어떤 협력 분야에 집중되어 있는지, 4대 분야별 비율을 통해 확인할 수 있어요.`}
        marginTop="6.25rem"
      />
      <CountryDonutChartContainer>
        <DonutWrapper>
          <CountryDonutChart data={data.category_ratio} />
        </DonutWrapper>
        <CountryDonutText>
          <h1>{country} 분야별 교류 비율</h1>
          <p>{data.exchage_explain}</p>
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

export default CountryCategory;
