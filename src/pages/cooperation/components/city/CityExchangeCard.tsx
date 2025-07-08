import type { CityCategoryItem } from "@apis/cooperation/getCityCategory";
import MainTitle from "@components/MainTitle";
import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface Props {
  city: string;
  data?: CityCategoryItem[];
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
            src={`/images/cooperation/card/${item.exchange_name}.png`}
            alt={item.exchange_name}
          />
        ))}
      </ExchangeCaseCardList>
      <Category>
        분류: 보건·환경·기술 | 교육·역량강화 | 문화·공공외교 | 제도·행정·포용
      </Category>
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

const Category = styled.p`
  ${fonts.body18M};
  color: ${({ theme }) => theme.colors.gray04};
  margin-top: 1.56rem;
`;

export default CityExchangeCard;
