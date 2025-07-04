import { dummyCitizenOpinion } from "@apis/dummy/dummyCitizenOpinion";
import { getResponse } from "@apis/instance";

export interface OpinionItem {
  opinion_id: number;
  local: number;
  local_name: string;
  title: string;
  content: string;
  created_at: string;
}

export const getCitizenOpinion = async (
  city: string
): Promise<OpinionItem[]> => {
  const url =
    city === "전체"
      ? "/api/citizen/opinion"
      : `/api/citizen/opinion?local=${city}`;

  const res = await getResponse<OpinionItem[]>(url);

  if (!res) {
    console.warn("시민 의견 API 실패. 더미데이터 반환");
    return dummyCitizenOpinion;
  }

  return res;
};
