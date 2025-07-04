export const CityMap: Record<string, string> = {
  서울특별시: "Seoul",
  제주특별자치도: "Jeju",
  경기도: "Gyeonggi-do",
  부산광역시: "Busan",
  인천광역시: "Incheon",
};

export function translateCity(input: string): string {
  return CityMap[input] || input;
}
