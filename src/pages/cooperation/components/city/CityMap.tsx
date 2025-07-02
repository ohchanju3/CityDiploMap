import MainTitle from "@components/MainTitle";
import { fonts } from "@styles/fonts";
import { theme } from "@styles/theme";
import styled from "styled-components";
import CityMapDes from "./CityMapDes";

interface CityRelationData {
  sister_city: {
    explain: string;
    cities: { city: string }[];
  };
  friendship_city: {
    explain: string;
    cities: { city: string }[];
  };
}

interface CityMapProps {
  city: string | null;
  data?: CityRelationData;
}

//TODO: 추후 이미지 변경 필요
const cityImageMap: Record<string, string> = {
  경기도: "Indonesia.png",
  부산광역시: "Vietnam.png",
  서울특별시: "Colombia.png",
  인천광역시: "Uzbekistan.png",
  제주특별자치도: "Ethiopia.png",
};

const CityMap = ({ city, data }: CityMapProps) => {
  const imageSrc = city ? `/images/country/${cityImageMap[city]}` : "";

  const sisterChips =
    data?.sister_city?.cities.map((c) => ({
      text: `#${c.city}`,
    })) ?? [];

  const friendshipChips =
    data?.friendship_city?.cities.map((c) => ({
      text: `#${c.city}`,
      bgColor: theme.colors.yellow03,
      textColor: theme.colors.yellow01,
    })) ?? [];

  return (
    <>
      <MainTitle
        title={
          <>
            <Blue>{city}</Blue>의 교류 협력 현황을 살펴보세요!
          </>
        }
        subtitle="국내 지자체의 자매 · 우호결연 도시, 주요 교류 분야와 비전 및 추진 과제를 확인해보세요. "
        type="contentTitle"
      />

      <CityMapWrapper>{imageSrc && <img src={imageSrc} />}</CityMapWrapper>

      <CityContainer>
        <h1>{city}의 자매 · 우호결연 도시</h1>
        <CityTextContainer>
          <CityMapDes
            title="자매도시"
            chips={sisterChips}
            description={data?.sister_city.explain ?? ""}
          />

          <CityMapDes
            title="우호결연 도시"
            chips={friendshipChips}
            description={data?.friendship_city.explain ?? ""}
          />
        </CityTextContainer>
      </CityContainer>
    </>
  );
};

const CityMapWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6.81rem;
  img {
    width: 1010.335px;
    height: 665.24px;
    object-fit: contain;
  }
`;

const Blue = styled.span`
  color: ${({ theme }) => theme.colors.blue02};
`;

const CityContainer = styled.section`
  margin-top: 2.81rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.81rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 15px;

  h1 {
    ${fonts.subtitle24B};
    color: ${({ theme }) => theme.colors.gray01};
    padding-bottom: 1.81rem;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
    margin-bottom: 1.87rem;
  }
`;

const CityTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.81rem;
`;

export default CityMap;
