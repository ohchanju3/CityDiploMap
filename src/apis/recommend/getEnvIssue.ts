import { dummyEnvIssue } from "@apis/dummy/dummyEnvIssue";
import { getResponse } from "@apis/instance";

export interface EnvIssueItem {
  environ_data_id: number;
  nation: number;
  nation_name: string;
  environ_data_title: string;
  pub_date: string;
}

export const getEnvIssue = async (country: string): Promise<EnvIssueItem[]> => {
  const url = `/api/recommend/nation-environ?nation=${country}`;

  const res = await getResponse<EnvIssueItem[]>(url);

  if (!res || res.length === 0) {
    console.warn("국가 환경 이슈 조회 API 실패. 더미데이터 반환");
    return dummyEnvIssue;
  }

  return res;
};
