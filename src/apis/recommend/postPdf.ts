import instance from "@apis/instance";

export interface RecommendedStrategyType {
  type: string;
  description: string;
}

export interface ExchangeCooperationProject {
  project_name: string;
  project_category: string;
  description: string;
}

export interface SummaryOfRecommendations {
  major_issues_by_country: string;
  local_government_diplomatic_assets: string;
  case_study_based_analysis: string;
}

export interface DownloadPdfRequest {
  local: string;
  nation: string;
  recommended_strategy_types: RecommendedStrategyType[];
  exchange_cooperation_projects: ExchangeCooperationProject[];
  summary_of_recommendations: SummaryOfRecommendations;
}

export const postPdf = async (body: DownloadPdfRequest) => {
  try {
    const response = await instance.post(
      "/api/recommend/pdf/public-diplomacy",
      body,
      {
        responseType: "blob",
      }
    );

    // PDF 다운로드 처리
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Diplow_교류전략.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("PDF 다운로드 실패:", err);
    alert("다시 시도해주세요 :(");
  }
};
