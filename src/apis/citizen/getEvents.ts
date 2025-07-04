import { dummyCitizenEvents } from "@apis/dummy/dummyCitizenEvents";
import { getResponse } from "@apis/instance";

export interface EventsItem {
  program_id: number;
  local: number;
  local_name: string;
  program_name: string;
  program_content: string;
  url: string;
  created_at: string;
}

export const getEvents = async (city: string): Promise<EventsItem[]> => {
  const url =
    city === "전체"
      ? "/api/citizen/program"
      : `/api/citizen/program?local=${city}`;

  const res = await getResponse<EventsItem[]>(url);

  if (!res || res.length === 0) {
    console.warn("국제 교류 행사 API 실패. 더미데이터 반환");
    return dummyCitizenEvents;
  }

  return res;
};
