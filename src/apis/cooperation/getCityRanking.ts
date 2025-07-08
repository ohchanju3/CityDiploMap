import { dummyCityRanking } from "@apis/dummy/dummyCityRanking";
import { getResponse } from "@apis/instance";

export interface CityRankingData {
  local_dash_id: number;
  local_ratio_explain: string;
  local_ratio_explain_detail: string;
  city_ranking: {
    nation_name: string;
    percent: number;
  }[];
}

export const getCityRanking = async (
  city: string
): Promise<CityRankingData | null> => {
  const url = `/api/local-status/city-ranking?local=${city}`;

  const res = await getResponse<CityRankingData[]>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 교류 데이터 없음. 더미데이터 반환");
    return dummyCityRanking;
  }

  return res[0];
};
