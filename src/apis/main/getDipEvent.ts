import { dummyDipEvent } from "@apis/dummy/dummyDipEvent";
import { getResponse } from "@apis/instance";

export interface EventItem {
  img?: string;
  title: string;
  content: string;
  id: number;
  category: string;
}

export const getDipEvent = async (): Promise<EventItem[]> => {
  const url = `/api/trends`;

  const res = await getResponse<{ data: EventItem[] }>(url);
  return res?.data ?? dummyDipEvent;
};
