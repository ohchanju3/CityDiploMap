import styled from "styled-components";
import { fonts } from "@styles/fonts";

interface TabSelectorProps {
  labelList: string[];
  selectedLabel: string;
  onSelect: (label: string) => void;
  marginTop?: string;
  marginBottom?: string;
}

const TabSelector = ({
  labelList,
  selectedLabel,
  onSelect,
  marginTop = "2.81rem",
  marginBottom = "1.88rem",
}: TabSelectorProps) => {
  return (
    <Wrapper $mt={marginTop} $mb={marginBottom}>
      {labelList.map((label) => (
        <Tab
          key={label}
          $isActive={selectedLabel === label}
          onClick={() => onSelect(label)}
        >
          {label}
        </Tab>
      ))}
    </Wrapper>
  );
};

export default TabSelector;

const Wrapper = styled.div<{ $mt: string; $mb: string }>`
  display: flex;
  gap: 0.5rem;
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
`;

const Tab = styled.section<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.25rem;
  height: 2.5rem;
  min-width: 3.5rem;
  border-bottom: 3px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.blue01 : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.blue01 : theme.colors.gray02};
  cursor: pointer;
  ${fonts.body18S}
`;
