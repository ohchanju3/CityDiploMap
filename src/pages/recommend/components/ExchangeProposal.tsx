import type { ExchangeStrategyData } from "@apis/recommend/getExchangeStrategy";
import MainTitle from "@components/MainTitle";
import DiplomacyEventList from "@pages/Main/components/DiplomacyEvent/DiplomacyEventList";

interface ProposalProps {
  data: ExchangeStrategyData;
}

const ExchangeProposal = ({ data }: ProposalProps) => {
  return (
    <>
      <MainTitle
        title="교류 협력 사업 제안"
        subtitle="교류 전략 수립을 위한 분석 자료와 인사이트를 요약해 안내해드려요."
        type="contentTitle"
        marginTop="7.81rem"
      />
      <DiplomacyEventList
        data={data.recommended_strategy_types}
        getTitle={(item) => item.type}
        getContent={(item) => item.description}
        getCategory={() => "전략유형"}
        isSummary={false}
      />
    </>
  );
};

export default ExchangeProposal;
