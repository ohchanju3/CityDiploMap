import { fonts } from "@styles/fonts";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";

interface CountryDonutChartProps {
  data: {
    health: number;
    edu: number;
    culture: number;
    system: number;
  };
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

const CountryDonutChart = ({ data }: CountryDonutChartProps) => {
  const theme = useTheme();

  const rawData = [
    { name: "보건·환경·기술", value: data.health },
    { name: "교육·역량강화", value: data.edu },
    { name: "문화·공공외교", value: data.culture },
    { name: "제도·행정·포용", value: data.system },
  ];

  // value 기준으로 정렬 (큰 비율 먼저)
  const sortedData = [...rawData].sort((a, b) => b.value - a.value);

  // 강한 색상부터 순서대로 매핑
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
            data={sortedData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={110}
            paddingAngle={2}
            cornerRadius={8}
            dataKey="value"
            //비율에 따라 시계방향으로 내림차순 되도록
            startAngle={90}
            endAngle={-270}
          >
            {sortedData.map((_, idx) => (
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
  width: 7.30081rem;
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

export default CountryDonutChart;
