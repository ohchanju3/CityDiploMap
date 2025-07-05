import type { ExchangeCaseData } from "@apis/cooperation/getCountryExchageCase";

export const dummyCountryCase: ExchangeCaseData[] = [
  {
    exchange_id: 1,
    exchange_name_kr: "한-베 청소년 문화 교류 프로그램",
    exchange_name_en: "Korea-Vietnam Youth Cultural Exchange",
    exchange_category: "culture",
    exchange_content:
      "한국과 베트남의 중고등학생 100명이 참여한 문화교류 캠프가 하노이에서 개최되었으며, 양국 전통 예술과 음식 체험, 팀 프로젝트 등을 통해 상호 이해를 증진하였다.",
    exchange_nation: "베트남",

    start_year: 2024,
    end_year: 2024,
    others: "성과: 상호 문화 이해도 향상, 산출물: 캠프 결과 보고서",
    pub_date: "2024-12-10",
  },
  {
    exchange_id: 2,
    exchange_name_kr: "스마트 농업 기술 협력 시범사업",
    exchange_name_en: "Smart Agriculture Pilot Project",
    exchange_category: "health",
    exchange_content:
      "대한민국 농림축산식품부는 베트남과 협력하여 메콩델타 지역에 스마트 농업 시스템을 시범 도입하고, ICT 기반 재배 기술을 교육하였다.",
    exchange_nation: "베트남",
    start_year: 2024,
    end_year: 2025,
    others: "성과: 농업 생산성 향상, 산출물: 스마트 농업 운영 매뉴얼",
    pub_date: "2025-03-02",
  },
  {
    exchange_id: 3,
    exchange_name_kr: "지방행정 디지털 전환 세미나",
    exchange_name_en: "Local Government Digital Transformation Seminar",
    exchange_category: "system",
    exchange_content:
      "행정안전부는 베트남 내무부와 공동으로 디지털 행정 전환 세미나를 개최하고, 대한민국의 지자체 전자정부 사례를 공유하였다.",
    exchange_nation: "베트남",
    start_year: 2025,
    end_year: 2025,
    others: "성과: 디지털 행정 도입 기반 마련, 산출물: 정책 브리핑 자료",
    pub_date: "2025-01-15",
  },
];
