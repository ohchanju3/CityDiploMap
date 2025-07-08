import { dummyCityCategory } from "@apis/dummy/dummyCityCategory";
import { getResponse } from "../instance";

export interface CityCategoryItem {
  exchange_name: string;
  exchange_display: string;
  exchange_num: string;
}

export interface CityCategoryResponse {
  local_dash_id: number;
  local: number;
  local_name: string;
  local_category_explain: string;
  major: CityCategoryItem[];
}

export const getCityCategory = async (
  city: string
): Promise<CityCategoryItem[]> => {
  const url = `/api/local-status/major-exchange?local=${city}`;
  const res = await getResponse<CityCategoryResponse[]>(url);

  if (!res || res.length === 0 || !res[0].major) {
    console.warn("지자체 교류 카테고리 데이터 없음. 더미데이터 반환");
    return dummyCityCategory;
  }

  return res[0].major;
};
