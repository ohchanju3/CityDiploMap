import { dummyRecommendSummary } from "@apis/dummy/dummyRecommendSummary";
import { getResponse } from "../instance";

export interface SummaryItem {
  title: string;
  content: string;
}

export type SummaryData = SummaryItem[];

export const getSummary = async (): Promise<SummaryData | null> => {
  //TODO: url 확인 후 추가 필요
  const url = `/api/summary`;
  const res = await getResponse<SummaryData>(url);

  if (!res || res.length === 0) {
    console.warn("추천 근거 요약.zip 데이터 없음. 더미데이터 반환");
    return dummyRecommendSummary;
  }

  return res;
};
