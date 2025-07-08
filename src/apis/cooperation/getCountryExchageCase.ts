import { dummyCountryCase } from "@apis/dummy/dummyCountryCase";
import { getResponse } from "@apis/instance";

export interface ExchangeCaseData {
  exchange_id: number;
  exchange_nation: string;
  exchange_name_kr: string;
  exchange_name_en: string;
  exchange_category: string;
  exchange_content: string;
  start_year: number;
  end_year: number;
  others: string;
  pub_date: string;
}

type ExchangeResponseData = {
  nation_dash_id: number;
  nation: number;
  nation_name: string;
  nation_recent_explain: string;
  example: ExchangeCaseData[];
}[];

export const getCountryExchageCase = async (
  nation: string
): Promise<ExchangeCaseData[]> => {
  const url = `/api/nation-status/recent?nation=${nation}`;
  const res = await getResponse<ExchangeResponseData>(url);

  if (!res || res.length === 0) {
    console.warn("교류 사례 API 실패. 더미데이터 반환");
    return dummyCountryCase;
  }

  return res[0].example ?? [];
};
