import { postResponse } from "@apis/instance";

interface opinionPostRequest {
  local: number;
  title: string;
  content: string;
}

export const postOpinion = (data: opinionPostRequest) => {
  return postResponse<opinionPostRequest, null>("/api/citizen/opinion", data);
};
