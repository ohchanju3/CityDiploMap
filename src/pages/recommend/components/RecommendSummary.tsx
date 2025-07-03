import type { SummaryData } from "@apis/recommend/getSummary";
import MainTitle from "@components/MainTitle";
import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface SummaryProps {
  data: SummaryData;
}

const imageMap = [
  "/images/recommend/demand.png",
  "/images/recommend/asset.png",
  "/images/recommend/case.png",
];

const bgColorMap = ["yellow03", "green03", "blue04"];

const RecommendSummary = ({ data }: SummaryProps) => {
  return (
    <>
      <MainTitle
        title="추천 근거 요약.zip"
        type="contentTitle"
        marginTop="7.81rem"
      />

      <SummaryWrapper>
        {data.map((item, idx) => (
          <SummaryList key={idx}>
            <SummaryImg $bg={bgColorMap[idx]}>
              <img src={imageMap[idx]} />
            </SummaryImg>
            <SummaryTextContainer>
              <h1>{item.title}</h1>
              <span>{item.content}</span>
            </SummaryTextContainer>
          </SummaryList>
        ))}
      </SummaryWrapper>
    </>
  );
};

const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.81rem;
  margin-top: 2.81rem;
`;

const SummaryList = styled.section`
  display: flex;
  gap: 2.81rem;
  padding-bottom: 2.81rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
`;

const SummaryImg = styled.div<{ $bg: string }>`
  min-width: 13.7rem;
  height: 14rem;
  border-radius: 1.2rem;
  background-color: ${({ theme, $bg }) =>
    theme.colors[$bg as keyof typeof theme.colors]};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    flex-shrink: 0;
    width: 9.8rem;
    height: 9.8rem;
  }
`;

const SummaryTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;

  h1 {
    color: ${({ theme }) => theme.colors.gray02};
    ${fonts.subtitle24B}
  }

  span {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray03};
    ${fonts.body20M};
    line-height: 1.875rem;
  }
`;

export default RecommendSummary;
