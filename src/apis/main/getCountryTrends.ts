import { dummyCountryTrends } from "@apis/dummy/dummyCountryTrends";
import { getResponse } from "@apis/instance";

export interface TrendItem {
  img?: string;
  title_kr: string;
  content_kr: string;
  movement_data_id: number;
}

export type TrendData = TrendItem[];

export const getTrendCountry = async (
  country: string
): Promise<TrendItem[]> => {
  const url =
    country === "전체" ? "/api/movement" : `/api/movement?nation=${country}`;

  const res = await getResponse<TrendItem[]>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 비전 API 실패.더미데이터 반환");
    return dummyCountryTrends;
  }

  return res;
};
