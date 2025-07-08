import MainTitle from "@components/MainTitle";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";
import type { ExchangeStrategyData } from "@apis/recommend/getExchangeStrategy";

interface SummaryProps {
  data: ExchangeStrategyData;
}

const imageMap = [
  "/images/recommend/demand.png",
  "/images/recommend/asset.png",
  "/images/recommend/case.png",
];

const bgColorMap = ["yellow03", "green03", "blue04"];

const RecommendSummary = ({ data }: SummaryProps) => {
  const summaries = [
    {
      title: "대상국 교류협력 수요",
      content: data.summary_of_recommendations.major_issues_by_country,
    },
    {
      title: "우리 지자체 외교 자산",
      content:
        data.summary_of_recommendations.local_government_diplomatic_assets,
    },
    {
      title: "기존 사례 기반 분석",
      content: data.summary_of_recommendations.case_study_based_analysis,
    },
  ];

  return (
    <>
      <MainTitle
        title="추천 근거 요약.zip"
        type="contentTitle"
        marginTop="7.81rem"
      />

      <SummaryWrapper>
        {summaries.map((item, idx) => (
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
