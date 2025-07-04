import { getResponse } from "../instance";
import { dummyExchangeStrategy } from "@apis/dummy/dummyExchangeStrategy";

export interface ExchangeStrategyItem {
  strategy: string;
  content: string;
}

export type ExchangeStrategyData = ExchangeStrategyItem[];

export const getExchangeStrategy = async (
  city: string,
  country: string,
  category: string,
  purpose: string
): Promise<ExchangeStrategyData | null> => {
  //TODO: url 확인 후 추가 필요
  const url = `/api/strategy/city?local=${city}/country?=${country}/${purpose}/${category}`;
  const res = await getResponse<ExchangeStrategyData>(url);

  if (!res || res.length === 0) {
    console.warn("지자체 교류 카테고리 데이터 없음. 더미데이터 반환");
    return dummyExchangeStrategy;
  }

  return res;
};
