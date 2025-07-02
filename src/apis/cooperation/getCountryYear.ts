import { dummyCountryYear } from "@apis/dummy/dummyCountryYear";
import { getResponse } from "@apis/instance";

export interface YearlyData {
  nation_dash_id: number;
  nation: number;
  nation_name: string;
  nation_num_tend: string;
  yearly_data_count: Record<string, number>;
}

export const getCountryYear = async (nation: string): Promise<YearlyData> => {
  const url = `/api/nation-status/year?nation=${nation}`;

  const res = await getResponse<YearlyData[]>(url);

  if (!res || res.length === 0) {
    console.warn(`교류 사업 수 변화 API 실패로 더미 데이터 대체`);
    return dummyCountryYear;
  }

  return res[0];
};
