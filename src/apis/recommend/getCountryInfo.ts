import { dummyCountryInfo } from "@apis/dummy/dummyCountryInfo";
import { getResponse } from "@apis/instance";

export interface CountryInfoItem {
  nation_id: number;
  nation_name: string;
  nation_info: string;
}

export const getCountryInfo = async (
  country: string
): Promise<CountryInfoItem> => {
  const url = `/api/recommend/nation-info?nation=${country}`;
  const res = await getResponse<CountryInfoItem[]>(url);

  if (!res || res.length === 0) {
    console.warn("국가 기본 정보 조회 API 데이터 없음. 더미데이터 반환");
    return dummyCountryInfo[0];
  }

  return res[0];
};
