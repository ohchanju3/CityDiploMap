import type { SummaryData } from "@apis/recommend/getSummary";
import MainTitle from "@components/MainTitle";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";

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
          <SummaryItem
            key={idx}
            title={item.title}
            content={item.content}
            image={imageMap[idx]}
            bgColor={bgColorMap[idx]}
          />
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

export default RecommendSummary;
