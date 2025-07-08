import { postResponse } from "../instance";
import { dummyExchangeStrategy } from "@apis/dummy/dummyExchangeStrategy";

export interface RecommendedStrategyType {
  type: string;
  description: string;
}

export interface ExchangeCooperationProject {
  project_name: string;
  project_category: string;
  description: string;
}

export interface SummaryOfRecommendations {
  major_issues_by_country: string;
  local_government_diplomatic_assets: string;
  case_study_based_analysis: string;
}

export interface ExchangeStrategyData {
  recommended_strategy_types: RecommendedStrategyType[];
  exchange_cooperation_projects: ExchangeCooperationProject[];
  summary_of_recommendations: SummaryOfRecommendations;
}

export const getExchangeStrategy = async (
  local: string,
  nation: string,
  category: string,
  purpose: string
): Promise<ExchangeStrategyData | null> => {
  const url = `/api/recommend/gpt/public-diplomacy`;
  const body = {
    local,
    nation,
    category,
    purpose,
  };

  const res = await postResponse<typeof body, { data: ExchangeStrategyData }>(
    url,
    body
  );

  if (!res || !res.data) {
    console.warn("지자체 교류 전략 데이터 없음. 더미데이터 반환");
    return dummyExchangeStrategy;
  }

  return res.data;
};
