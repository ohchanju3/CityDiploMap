import styled from "styled-components";
import CountryTrendsCard from "./CountryTrendsCard";
import type { TrendItem } from "@apis/main/getCountryTrends";

interface CountryTrendsContainerProps {
  data: TrendItem[];
}

const CountryTrendsContainer = ({ data }: CountryTrendsContainerProps) => {
  return (
    <CardGridWrapper>
      {data.map((item) => (
        <CountryTrendsCard
          key={item.movement_data_id}
          id={item.movement_data_id}
          title={item.title_kr}
          content={item.content_kr}
          img={item.img}
        />
      ))}
    </CardGridWrapper>
  );
};

const CardGridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export default CountryTrendsContainer;
