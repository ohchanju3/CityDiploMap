import MainTitle from "@components/MainTitle";
import styled from "styled-components";

interface CountryProps {
  country: string | null;
}

const countryImageMap: Record<string, string> = {
  인도네시아: "Indonesia.png",
  베트남: "Vietnam.png",
  콜롬비아: "Colombia.png",
  우즈베키스탄: "Uzbekistan.png",
  에티오피아: "Ethiopia.png",
};

const CountryMap = ({ country }: CountryProps) => {
  const imageSrc = country ? `/images/country/${countryImageMap[country]}` : "";

  return (
    <>
      <MainTitle
        title={
          <>
            <Blue>{country}</Blue> 교류 협력 현황을 살펴보세요!
          </>
        }
        subtitle={`우리나라와 ${country} 간의 협력 이력, 주요 교류 분야와 사업 수 추이를 확인해보세요.`}
        type="contentTitle"
      />
      <CountryMapWrapper>
        {imageSrc && <img src={imageSrc} />}
      </CountryMapWrapper>
    </>
  );
};

const CountryMapWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6.81rem;
  padding-bottom: 6.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue05};

  img {
    width: 1010.335px;
    height: 665.24px;
    object-fit: contain;
  }
`;

const Blue = styled.span`
  color: ${({ theme }) => theme.colors.blue02};
`;

export default CountryMap;
