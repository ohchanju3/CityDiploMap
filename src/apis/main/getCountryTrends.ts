import { dummyCountryTrends } from "@apis/dummy/dummyCountryTrends";
import { getResponse } from "@apis/instance";

export interface TrendItem {
  img?: string;
  title: string;
  content: string;
  id: number;
}

export const fetchTrendsByCountry = async (
  country: string
): Promise<TrendItem[]> => {
  const url =
    country === "전체"
      ? "/api/trends"
      : `/api/trends?country=${encodeURIComponent(country)}`;

  const res = await getResponse<{ data: TrendItem[] }>(url);
  return res?.data ?? dummyCountryTrends;
};
