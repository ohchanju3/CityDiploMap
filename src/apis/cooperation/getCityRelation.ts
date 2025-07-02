import { dummyCityRelation } from "@apis/dummy/dummyCityRelation";
import { getResponse } from "@apis/instance";

export interface CityRelationData {
  sister_city: {
    explain: string;
    cities: { city: string }[];
  };
  friendship_city: {
    explain: string;
    cities: { city: string }[];
  };
}

export const getCityRelations = async (
  city: string
): Promise<CityRelationData | null> => {
  const url = `/api/local-status/city?local=${city}`;

  const res = await getResponse<CityRelationData[]>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 교류 데이터 없음. 더미데이터 반환");
    return dummyCityRelation;
  }

  return res[0];
};
