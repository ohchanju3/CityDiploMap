import Button from "@components/Button";
import MainTitle from "@components/MainTitle";
import styled from "styled-components";
import StrategyDes from "./StrategyDes";
import { fonts } from "@styles/fonts";
import type { ExchangeStrategyData } from "@apis/recommend/getExchangeStrategy";
import { postPdf } from "@apis/recommend/postPdf";

interface ExchangeStrategyProps {
  city: string;
  country: string;
  data: ExchangeStrategyData;
  onDownloadStart: () => void;
  onDownloadEnd: () => void;
}

const ExchangeStrategy = ({
  city,
  country,
  data,
  onDownloadStart,
  onDownloadEnd,
}: ExchangeStrategyProps) => {
  const handleDownloadPdf = async () => {
    onDownloadStart();
    try {
      await postPdf({ local: city, nation: country, ...data });
    } catch (err) {
      console.error("PDF 다운로드 실패", err);
    } finally {
      onDownloadEnd();
    }
  };

  return (
    <>
      <MainTitle
        title={
          <>
            <Blue>
              {city} - {country}
            </Blue>{" "}
            간 최적의 교류 전략을 제안해요!
          </>
        }
        subtitle="지자체·국가·분야·협력 목적을 기반으로 맞춤형 전략 방안을 설계했습니다."
        rightBtn={
          <Button
            text="PDF 다운로드"
            img="/icons/download.svg"
            onClick={handleDownloadPdf}
          />
        }
        type="contentTitle"
      />
      <ExchangeStrategyContainer>
        <h1>추천 교류 전략 유형</h1>
        <StrategyDesList>
          {data.recommended_strategy_types.map((item, idx) => (
            <StrategyDes
              key={idx}
              chip={item.type}
              description={item.description}
            />
          ))}
        </StrategyDesList>
      </ExchangeStrategyContainer>
    </>
  );
};
export default ExchangeStrategy;

const Blue = styled.span`
  color: ${({ theme }) => theme.colors.blue02};
`;

const ExchangeStrategyContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  padding: 2.81rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 15px;

  h1 {
    ${fonts.subtitle24B};
    color: ${({ theme }) => theme.colors.gray01};
    padding-bottom: 1.88rem;
    margin-bottom: 1.88rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
  }
`;

const StrategyDesList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.19rem;
`;
