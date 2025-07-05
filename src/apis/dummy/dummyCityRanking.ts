import type { CityRankingData } from "@apis/cooperation/getCityRanking";

export const dummyCityRanking: CityRankingData = {
  local_dash_id: 3,
  local_ratio_explain: "서울특별시 주요 교류국 순위 설명",
  local_ratio_explain_detail: "서울특별시 주요 교류국 순위 상세 설명",
  city_ranking: [
    {
      nation_name: "중국",
      percent: 10.84,
    },
    {
      nation_name: "미국",
      percent: 9.64,
    },
    {
      nation_name: "이탈리아",
      percent: 3.61,
    },
    {
      nation_name: "브라질",
      percent: 3.61,
    },
    {
      nation_name: "기타",
      percent: 72.29,
    },
  ],
};
