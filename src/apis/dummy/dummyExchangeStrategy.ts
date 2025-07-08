import type { ExchangeStrategyData } from "@apis/recommend/getExchangeStrategy";

export const dummyExchangeStrategy: ExchangeStrategyData = {
  recommended_strategy_types: [
    {
      type: "문화외교",
      description: "문화 행사 및 예술 교류를 통해 관계를 강화합니다.",
    },
    {
      type: "자매결연",
      description: "지자체 간 공식적인 협력 관계를 수립합니다.",
    },
  ],
  exchange_cooperation_projects: [
    {
      project_name: "한-프랑스 청년 문화 캠프",
      project_category: "문화",
      description: "청년 간 문화 교류를 통해 상호 이해 증진",
    },
    {
      project_name: "디지털 교육 협력 프로젝트",
      project_category: "교육",
      description: "온라인 플랫폼을 활용한 디지털 교육 공동 운영",
    },
    {
      project_name: "공공 행정 역량 교류",
      project_category: "행정",
      description: "행정 우수 사례를 상호 공유하는 워크숍 개최",
    },
  ],
  summary_of_recommendations: {
    major_issues_by_country:
      "청년 실업률과 디지털 격차 문제가 주요 이슈입니다.",
    local_government_diplomatic_assets:
      "국제 청년축제 유치 경험과 교육 플랫폼을 보유하고 있습니다.",
    case_study_based_analysis:
      "A시와 B시의 협력 사례가 유의미한 성과를 보였습니다.",
  },
};
