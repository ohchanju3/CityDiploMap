import type { OptionItem } from "@components/Filters/FilterItem";

export const COUNTRY_OPTIONS: OptionItem[] = [
  { value: "베트남", label_ko: "베트남", label_en: "Vietnam" },
  { value: "에티오피아", label_ko: "에티오피아", label_en: "Ethiopia" },
  { value: "우즈베키스탄", label_ko: "우즈베키스탄", label_en: "Uzbekistan" },
  { value: "인도네시아", label_ko: "인도네시아", label_en: "Indonesia" },
  { value: "콜롬비아", label_ko: "콜롬비아", label_en: "Colombia" },
];

export const CITY_OPTIONS: OptionItem[] = [
  { value: "경기도", label_ko: "경기도", label_en: "Gyeonggi-do" },
  { value: "부산광역시", label_ko: "부산광역시", label_en: "Busan" },
  { value: "서울특별시", label_ko: "서울특별시", label_en: "Seoul" },
  { value: "인천광역시", label_ko: "인천광역시", label_en: "Incheon" },
  { value: "제주특별자치도", label_ko: "제주특별자치도", label_en: "Jeju" },
];

export const CATEGORY_OPTIONS: OptionItem[] = [
  {
    value: "보건 · 환경 · 기술",
    label_ko: "보건 · 환경 · 기술",
    label_en: "Health · Environment · Technology",
  },
  {
    value: "교육 · 역량강화",
    label_ko: "교육 · 역량강화",
    label_en: "Education · Capacity Building",
  },
  {
    value: "문화 · 공공외교",
    label_ko: "문화 · 공공외교",
    label_en: "Culture · Public Diplomacy",
  },
  {
    value: "제도 · 행정 · 포용",
    label_ko: "제도 · 행정 · 포용",
    label_en: "System · Governance · Inclusion",
  },
];

export const PURPOSE_OPTIONS: OptionItem[] = [
  {
    value: "기존 파트너 강화",
    label_ko: "기존 교류 강화",
    label_en: "Strengthening Existing Partners",
  },
  {
    value: "신규 교류 개척",
    label_ko: "신규 교류 개척",
    label_en: "Developing New Partnerships",
  },
  {
    value: "특정 분야 집중",
    label_ko: "특정 분야 집중",
    label_en: "Focus on Specific Sector",
  },
];
