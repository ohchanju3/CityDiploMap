import { getResponse } from "@apis/instance";
import { dummyCountryRatio } from "@apis/dummy/dummyCountryRatio";

export interface CategoryRatioData {
  nation_dash_id: number;
  nation_ratio_explain: string;
  nation_ratio_explain_detail: string;
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

  const res = await getResponse<CategoryRatioData[]>(url);

  if (!res || res.length === 0) {
    console.warn(`국가 비율 API 실패로 더미 데이터 대체`);
    return dummyCountryRatio;
  }

  return res[0];
};
