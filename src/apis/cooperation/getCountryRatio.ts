import { getResponse } from "@apis/instance";
import { dummyCountryRatio } from "@apis/dummy/dummyCountryRatio";

export interface CategoryRatioData {
  nation_dash_id: number;
  exchage_explain: string;
  category_ratio: {
    health: number;
    edu: number;
    culture: number;
    system: number;
  };
}

export const getCountryRatio = async (
  nation: string
): Promise<CategoryRatioData> => {
  const url = `/api/nation-status/category-ratio?nation=${nation}`;

  const res = await getResponse<{ data: CategoryRatioData[] }>(url);

  if (!res || !res.data || res.data.length === 0) {
    console.warn(`국가 비율 API 실패로 더미 데이터 대체`);
    return dummyCountryRatio;
  }

  return res.data[0];
};
