import MainTitle from "@components/MainTitle";
import { withPostposition } from "@utils/postPosition";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  country: string;
  data?: { year: number; value: number }[];
}

const CountryYearGraph = ({ country, data }: Props) => {
  const countryWithPost = country
    ? withPostposition(country, ["과", "와"])
    : "";

  const mergedData = data?.map((item) => ({
    ...item,
    valueShadow: item.value - 0.8,
  }));

  return (
    <>
      <MainTitle
        title="연도별 교류 사업 수 변화를 살펴봐요!"
        subtitle={`연도에 따라 ${countryWithPost}의 교류협력 사업이 얼마나 증가하거나 변화했는지 확인할 수 있어요.`}
        type="contentTitle"
        marginTop="9.38rem"
      />

      <ChartWrapper>
        <ResponsiveContainer width="100%" height={269}>
          <LineChart data={mergedData}>
            <CartesianGrid
              stroke="#E0E0E0"
              strokeDasharray="0"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              stroke="#E0E0E0"
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              padding={{ left: 25 }}
              tick={{
                fill: "#6B7280",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            />
            <YAxis
              domain={[0, 12]}
              tickCount={7}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{
                fill: "#6B7280",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            />

            {/* 그림자 선 */}
            <Line
              type="monotone"
              dataKey="valueShadow"
              stroke="rgba(37, 110, 244, 0.3)"
              strokeWidth={4.259}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
              style={{
                filter: "blur(7.45px)",
              }}
            />

            {/* 실선 */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--Blue-Blue03, #256EF4)"
              strokeWidth={4.259}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

export default CountryYearGraph;
