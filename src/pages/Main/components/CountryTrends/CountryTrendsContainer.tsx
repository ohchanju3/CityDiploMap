import styled from "styled-components";
import CountryTrendsCard, {
  type CountryTrendsCardProps,
} from "./CountryTrendsCard";

interface CountryTrendsContainerProps {
  data: CountryTrendsCardProps[];
}

const CountryTrendsContainer = ({ data }: CountryTrendsContainerProps) => {
  return (
    <CardGridWrapper>
      {data.map((item, index) => (
        <CountryTrendsCard
          key={index}
          img={item.img}
          title={item.title}
          content={item.content}
          onClick={item.onClick}
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
