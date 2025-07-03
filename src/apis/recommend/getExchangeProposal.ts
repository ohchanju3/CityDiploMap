import { dummyExchangeProposal } from "@apis/dummy/dummyExchangeProposa";
import { getResponse } from "@apis/instance";

export interface ProposalItem {
  event_id: number;
  img?: string;
  event_title: string;
  event_content: string;
  event_category: string;
  created_at: string;
}

export type ProposalData = ProposalItem[];

export const getExchangeProposal = async (): Promise<ProposalData> => {
  //TODO: api 명세서 추후 확인 필요
  const url = `/api/recommend/proposal`;

  const res = await getResponse<ProposalData[]>(url);

  if (!res || res.length === 0) {
    console.warn("교류 협력 사업 제안 API 실패.더미데이터 반환");
    return dummyExchangeProposal;
  }

  return res[0];
};
