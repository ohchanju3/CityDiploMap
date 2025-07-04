import MainTitle from "@components/MainTitle";
import styled from "styled-components";

interface CategoryData {
  category: string;
}

interface Props {
  city: string;
  data?: CategoryData[];
}

const CityExchangeCard = ({ city, data }: Props) => {
  return (
    <>
      <MainTitle
        title={`${city}의 주요 교류 분야를 확인해보세요!`}
        subtitle={`교류협력 4대 분야 중 ${city}가 중점적으로 추진하고 있는 주요 3개 분야를 확인할 수 있어요.`}
        type="contentTitle"
        marginTop="9.38rem"
      />

      <ExchangeCaseCardList>
        {data?.map((item, idx) => (
          <img
            key={idx}
            src={`/images/cooperation/card/${item.category}.png`}
            alt={item.category}
          />
        ))}
      </ExchangeCaseCardList>
    </>
  );
};

const ExchangeCaseCardList = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 3.75rem;

  img {
    width: 218.524px;
    height: 223.38px;
  }
`;

export default CityExchangeCard;
