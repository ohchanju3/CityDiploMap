import { fonts } from "@styles/fonts";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";

interface CityDonutChartProps {
  city_ranking: {
    nation_name: string;
    percent: number;
  }[];
}

interface PayloadItem {
  name: string;
  value: number;
  fill: string;
}

const CustomTooltip = ({
  active,
  payload,
  coordinate,
}: {
  active?: boolean;
  payload?: PayloadItem[];
  coordinate?: { x: number; y: number };
}) => {
  if (active && payload && payload.length > 0 && coordinate) {
    const { name, value, fill } = payload[0];

    const OFFSET_X = 10;
    const OFFSET_Y = -80;

    return (
      <div
        style={{
          position: "absolute",
          left: coordinate.x + OFFSET_X,
          top: coordinate.y + OFFSET_Y,
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <TooltipBox $color={fill}>
          <p className="label">{name}</p>
          <p className="value">{value}%</p>
        </TooltipBox>
      </div>
    );
  }
  return null;
};

const CityDonutChart = ({ city_ranking }: CityDonutChartProps) => {
  const theme = useTheme();

  const sortedRanking = [...city_ranking].sort((a, b) => b.percent - a.percent);

  const top3 = sortedRanking.slice(0, 3);

  const othersPercent = sortedRanking
    .slice(3)
    .reduce((acc, cur) => acc + cur.percent, 0);

  const chartData = [
    ...top3.map((item) => ({
      name: item.nation_name,
      value: item.percent,
    })),
  ];

  if (othersPercent > 0) {
    chartData.push({
      name: "기타",
      value: othersPercent,
    });
  }

  const colorLevels = [
    theme.colors.blue01,
    theme.colors.blue02,
    theme.colors.blue03,
    theme.colors.blue04,
  ];

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={261}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={110}
            paddingAngle={2}
            cornerRadius={8}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {chartData.map((_, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={colorLevels[idx]}
                style={{ cursor: "pointer" }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const TooltipBox = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray07};
  gap: 0.44rem;
  width: 7.3rem;
  height: 5.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.9rem;
  color: ${({ theme }) => theme.colors.gray01};

  .label {
    ${fonts.cap16M}
    color: ${({ theme }) => theme.colors.gray02};
    opacity: 0.5;
  }

  .value {
    ${fonts.body18S}
    color: ${({ theme }) => theme.colors.gray02};
  }
`;

export default CityDonutChart;
