import { dummyCityVision } from "@apis/dummy/dummyCityVision";
import { getResponse } from "../instance";

export interface CityVisionItem {
  vision_category: string;
  vision_title: string;
  vision_content: string;
  created_at: string;
  updated_at: string;
}

export type CityVisionData = CityVisionItem[];

export const getCityVision = async (
  city: string
): Promise<CityVisionData | null> => {
  const url = `/cooperation/local/vision?city=${city}`;
  const res = await getResponse<CityVisionData>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 비전 API 실패.더미데이터 반환");
    return dummyCityVision;
  }

  return res;
};
