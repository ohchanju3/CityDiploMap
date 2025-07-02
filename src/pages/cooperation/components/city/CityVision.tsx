import MainTitle from "@components/MainTitle";
import ExchangeCaseCard from "../country/ExchangeCaseCard";
import styled from "styled-components";
import type { CityVisionItem } from "@apis/cooperation/getCityVision";
import { cityNameToEn } from "@utils/cityNameToEn";

interface Props {
  city: string;
  data: CityVisionItem[];
}

const CityVision = ({ city, data }: Props) => {
  const imageName = cityNameToEn[city] || "default";

  return (
    <>
      <MainTitle
        title={`${city}에서 설정한 집중 사업영역을 살펴봐요!`}
        subtitle={`${city}가 소개하는 국제교류 비전과 이를 실현하기 위한 추진 과제를 확인해보세요.`}
        marginTop="9.38rem"
      />

      <CardList>
        {data.map(({ vision_category, vision_title, vision_content }, idx) => (
          <ExchangeCaseCard
            key={idx}
            content={vision_content}
            category={vision_category}
            title={vision_title}
            img={`/images/cooperation/card/${imageName}.png`}
            bgColor="#DFE8F4"
            useCategoryMap={false}
          />
        ))}
      </CardList>
    </>
  );
};

const CardList = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

export default CityVision;
