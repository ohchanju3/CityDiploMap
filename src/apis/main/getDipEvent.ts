import { dummyDipEvent } from "@apis/dummy/dummyDipEvent";
import { getResponse } from "@apis/instance";

export interface EventItem {
  event_id: number;
  img?: string;
  event_title: string;
  event_content: string;
  event_category: string;
  url?: string;
  created_at: string;
}

export type EventData = EventItem[];

export const getDipEvent = async (): Promise<EventData> => {
  const url = `/api/diplomacy`;

  const res = await getResponse<EventData[]>(url);

  if (!res || res.length === 0) {
    console.warn("메인 공공외교 행사 API 실패.더미데이터 반환");
    return dummyDipEvent;
  }

  return res[0];
};
