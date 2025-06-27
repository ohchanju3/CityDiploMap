import { css } from "styled-components";

//TODO: 플젝 디자인시스템 맞게 수정
const fontGenerator = (
  weight: number,
  size: string,
  // lineHeight: string,
  fontFamily?: string
) => css`
  font-weight: ${weight};
  font-size: ${size};

  font-family: ${fontFamily ? `${fontFamily}` : "Pretendard"};
`;

export const fonts = {
  // Header
  header20B: fontGenerator(700, "20px"),
  header20M: fontGenerator(500, "20px"),
  header16M: fontGenerator(500, "16px"),

  //title
  title40B: fontGenerator(700, "40px"),
  title32B: fontGenerator(700, "32px"),

  //subtitle
  subtitle24B: fontGenerator(700, "24px"),
  subtitle28B: fontGenerator(700, "28px"),

  //body
  body20B: fontGenerator(700, "20px"),
  body20S: fontGenerator(600, "20px"),
  body20M: fontGenerator(500, "20px"),
  body18S: fontGenerator(600, "18px"),
  body18M: fontGenerator(500, "18px"),

  //caption
  cap16B: fontGenerator(700, "16px"),
  cap16S: fontGenerator(600, "16px"),
  cap16M: fontGenerator(500, "16px"),
};
