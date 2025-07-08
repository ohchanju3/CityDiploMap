import MainTitle from "@components/MainTitle";
import ExchangeCaseCard from "../country/ExchangeCaseCard";
import styled from "styled-components";
import type { CityVisionItem } from "@apis/cooperation/getCityVision";
import { cityNameToEn } from "@utils/nameToEn";

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
        subtitle={`${city}는 글로벌 도시로 도약하기 위해 다양한 전략과 이니셔티브를 추진하며, 교류 역량을 키우고 특화된 발전 방향을 마련하고 있어요.`}
        marginTop="9.38rem"
        type="contentTitle"
      />

      <CardList>
        {data.map(
          ({ project_category, project_title, project_content }, idx) => (
            <ExchangeCaseCard
              key={idx}
              content={project_content}
              category={project_category}
              title={project_title}
              img={`/images/cooperation/card/${imageName}.png`}
              bgColor="#DFE8F4"
              useCategoryMap={false}
            />
          )
        )}
      </CardList>
    </>
  );
};

const CardList = styled.div`
  display: flex;
  /* gap: 2rem; */
  justify-content: space-between;
  margin-top: 3rem;
`;

export default CityVision;
