import { theme } from "@styles/theme";

export const CATEGORY_MAP = (
  category: string
): { label: string; img: string; bgColor: string } => {
  const map: Record<string, { label: string; img: string; bgColor: string }> = {
    health: {
      label: "보건 · 환경 · 기술 ",
      img: "/images/exchange/health.png",
      bgColor: theme.colors.red02,
    },
    edu: {
      label: "교육 · 역량강화",
      img: "/images/exchange/edu.png",
      bgColor: theme.colors.yellow03,
    },
    culture: {
      label: "문화 · 공공외교",
      img: "/images/exchange/culture.png",
      bgColor: theme.colors.green03,
    },
    system: {
      label: "제도 · 행정 · 포용",
      img: "/images/exchange/system.png",
      bgColor: theme.colors.cardBlue,
    },
    etc: {
      label: "기타",
      img: "/images/exchange/etc.png",
      bgColor: theme.colors.blue07,
    },
  };

  return map[category];
};
