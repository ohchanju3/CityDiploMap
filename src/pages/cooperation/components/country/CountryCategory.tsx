import MainTitle from "@components/MainTitle";
import { withPostposition } from "@utils/postPosition";
import CountryDonutChart from "./CountryDonutChart";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import type { CategoryRatioData } from "@apis/cooperation/getCountryRatio";

interface CountryCategoryProps {
  country: string;
  data: CategoryRatioData;
}

const CATEGORY_KO: Record<string, string> = {
  health: "보건·환경·기술",
  edu: "교육·역량강화",
  culture: "문화·공공외교",
  system: "제도·행정·포용",
};

const CountryCategory = ({ country, data }: CountryCategoryProps) => {
  const countryWithPost = country
    ? withPostposition(country, ["과", "와"])
    : "";

  const ratioSentence = buildRatioSentence(country, data.category_ratio);

  return (
    <>
      <MainTitle
        title="어떤 분야에서 활발히 교류하고 있을까요?"
        subtitle={`${countryWithPost}의 교류가 어떤 협력 분야에 집중되어 있는지, 4대 분야별 비율을 통해 확인할 수 있어요.`}
        marginTop="6.25rem"
        type="contentTitle"
      />
      <CountryDonutChartContainer>
        <DonutWrapper>
          <CountryDonutChart data={data.category_ratio} />
        </DonutWrapper>
        <CountryDonutText>
          <h1>{country} 분야별 교류 비율</h1>
          <p>{ratioSentence}</p>
        </CountryDonutText>
      </CountryDonutChartContainer>
    </>
  );
};

function withTopicParticle(word: string) {
  if (!word) return "";
  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0);
  const hasBatchim = (code - 0xac00) % 28 !== 0;
  return `${word}${hasBatchim ? "은" : "는"}`;
}

function fmt(n: number) {
  return Number.isInteger(n) ? `${n}` : n.toFixed(1).replace(/\.0$/, "");
}

function joinWithMit(parts: string[]) {
  if (parts.length <= 1) return parts.join("");
  if (parts.length === 2) return parts.join(" 및 ");
  return `${parts.slice(0, -1).join(", ")} 및 ${parts[parts.length - 1]}`;
}

function buildRatioSentence(
  country: string,
  categoryRatio: Record<string, number>
) {
  const entries = Object.entries(categoryRatio || {})
    .filter(([, v]) => typeof v === "number")
    .sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) return "";

  const parts = entries.map(([key, value]) => {
    const label = CATEGORY_KO[key] ?? key;
    return `${label} 분야 ${fmt(value)}%`;
  });

  const head = withTopicParticle(country || "해당 국가");

  const mainPart = `${head} ${joinWithMit(
    parts
  )}로 교류가 이루어지고 있습니다.`;
  const highlight = `이 중에서도 ${
    CATEGORY_KO[entries[0][0]] ?? entries[0][0]
  } 분야의 비중이 가장 높아, 해당 국가가 ${
    CATEGORY_KO[entries[0][0]] ?? entries[0][0]
  } 중심의 협력에 주력하고 있음을 알 수 있습니다.`;
  const subHighlight =
    entries.length > 1
      ? `또한 ${CATEGORY_KO[entries[1][0]] ?? entries[1][0]}과 ${
          CATEGORY_KO[entries[2][0]] ?? entries[2][0]
        } 분야에서도 의미 있는 교류가 진행되고 있습니다.`
      : "";

  return `${mainPart} ${highlight} ${subHighlight}`;
}

const CountryDonutChartContainer = styled.section`
  display: flex;
  gap: 3.44rem;
  margin-top: 5rem;
`;

const DonutWrapper = styled.div`
  width: 261px;
  height: 261px;
  flex-shrink: 0;
`;

const CountryDonutText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;

  h1 {
    ${fonts.subtitle24B}
    color: ${({ theme }) => theme.colors.gray02};
  }

  p {
    color: ${({ theme }) => theme.colors.gray03};
    white-space: pre-line;
    ${fonts.body20M};
    line-height: 1.875rem;
  }
`;

export default CountryCategory;
