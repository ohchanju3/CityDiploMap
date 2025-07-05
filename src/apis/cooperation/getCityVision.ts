import { dummyCityVision } from "@apis/dummy/dummyCityVision";
import { getResponse } from "../instance";

export interface CityVisionItem {
  project_title: string;
  project_category: string;
  project_content: string;
  project_created_at: string;
}

export type CityVisionData = CityVisionItem[];

export const getCityVision = async (
  city: string
): Promise<CityVisionData | null> => {
  const url = `/api/local-status/vision?local=${city}`;
  const res = await getResponse<any>(url);

  if (!res || !Array.isArray(res) || res.length === 0) {
    console.warn("지자체 비전 API 실패. 더미데이터 반환");
    return dummyCityVision;
  }

  return res[0].projects ?? dummyCityVision;
};
