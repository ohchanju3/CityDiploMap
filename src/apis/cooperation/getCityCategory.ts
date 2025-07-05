import { dummyCityCategory } from "@apis/dummy/dummyCityCategory";
import { getResponse } from "../instance";

export interface CityCategoryItem {
  category: string;
}

export type CityCategoryData = CityCategoryItem[];

export const getCityCategory = async (
  city: string
): Promise<CityCategoryData | null> => {
  const url = `/api/local-status/major-exchange?local=${city}`;
  const res = await getResponse<CityCategoryData>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 교류 카테고리 데이터 없음. 더미데이터 반환");
    return dummyCityCategory;
  }

  return res;
};
