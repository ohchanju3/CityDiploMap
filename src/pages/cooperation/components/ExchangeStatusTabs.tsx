import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface Props {
  active: "국가" | "지자체";
  onChange: (tab: "국가" | "지자체") => void;
}

const ExchangeStatusTabs = ({ active, onChange }: Props) => {
  return (
    <TabWrapper>
      <TabButton
        $active={active === "국가"}
        onClick={() => onChange("국가")}
        $position="left"
      >
        국가 교류 협력 현황
      </TabButton>
      <TabButton
        $active={active === "지자체"}
        onClick={() => onChange("지자체")}
        $position="right"
      >
        지자체 교류 협력 현황
      </TabButton>
    </TabWrapper>
  );
};

export default ExchangeStatusTabs;

const TabWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 3.44rem;
`;

const TabButton = styled.section<{
  $active: boolean;
  $position: "left" | "right";
}>`
  flex: 1;
  padding: 1rem;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.blue01 : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gray07 : theme.colors.gray02};
  border: 1px solid
    ${({ $active, theme }) => ($active ? "none" : theme.colors.gray05)};
  cursor: pointer;
  ${fonts.body20S};
  display: flex;
  justify-content: center;

  ${({ $position }) =>
    $position === "left" &&
    `
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    `}
  ${({ $position }) =>
    $position === "right" &&
    `
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
`;
