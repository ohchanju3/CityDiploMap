import { fonts } from "@styles/fonts";
import styled from "styled-components";

const Chip = ({ text }: { text: string }) => {
  return (
    <ChipWrapper>
      <span>{text}</span>
    </ChipWrapper>
  );
};

const ChipWrapper = styled.section`
  display: inline-flex;
  width: fit-content;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.blue07};
  color: ${({ theme }) => theme.colors.blue02};
  ${fonts.cap16S}
  white-space: nowrap;
`;

export default Chip;
