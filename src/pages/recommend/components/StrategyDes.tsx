import Chip from "@components/ChipBadge";
import styled from "styled-components";
import { fonts } from "@styles/fonts";

interface StrategyDesProps {
  chip: string;
  description: string;
}

const StrategyDes = ({ chip, description }: StrategyDesProps) => {
  return (
    <Wrapper>
      <Chip text={`#${chip}`} borderRadius="1.87rem" padding="0.5rem 0.88rem" />
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default StrategyDes;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Text = styled.span`
  ${fonts.body20M};
  color: ${({ theme }) => theme.colors.gray03};
  white-space: pre-line;
`;
