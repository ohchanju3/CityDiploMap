import { dummyCountryCase } from "@apis/dummy/dummyCountryCase";
import { getResponse } from "@apis/instance";

export interface ExchangeExample {
  exchage_id: number;
  exchage_name_kr: string;
  exchage_name_en: string;
  exchage_category: string;
  exchage_content: string;
  exchage_nation: string;
  exchage_nation_image: string;
  pub_date: string;
}

export const getCountryExchageCase = async (
  nation: string
): Promise<ExchangeExample[]> => {
  const url = `/api/nation-status/recent?nation=${nation}`;

  const res = await getResponse<{ data: { example: ExchangeExample[] }[] }>(
    url
  );

  if (!res?.data[0]) {
    console.warn("교류 사례 API 실패. 더미데이터 반환");
    return dummyCountryCase;
  }

  return res.data?.[0]?.example ?? [];
};
