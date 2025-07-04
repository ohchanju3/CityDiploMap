import MainTitle from "@components/MainTitle";
import { CountryNameToEn } from "@utils/nameToEn";
import styled from "styled-components";

interface CountryProps {
  country: string;
}

const CountryMap = ({ country }: CountryProps) => {
  const imageSrc = CountryNameToEn[country];

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
        {imageSrc && <img src={`/images/country/${imageSrc}.png`} />}
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
