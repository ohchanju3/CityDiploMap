import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface ChipProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
}

const Chip = ({
  text,
  bgColor,
  textColor,
  borderRadius,
  padding,
}: ChipProps) => {
  return (
    <ChipWrapper
      $bgColor={bgColor}
      $textColor={textColor}
      $borderRadius={borderRadius}
      $padding={padding}
    >
      <span>{text}</span>
    </ChipWrapper>
  );
};

const ChipWrapper = styled.section<{
  $bgColor?: string;
  $textColor?: string;
  $borderRadius?: string;
  $padding?: string;
}>`
  display: inline-flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: ${({ $padding }) => $padding ?? "0rem 0.5rem"};
  background-color: ${({ theme, $bgColor }) => $bgColor ?? theme.colors.blue07};
  color: ${({ theme, $textColor }) => $textColor ?? theme.colors.blue02};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "0.25rem"};
  ${fonts.cap16S}
`;

export default Chip;
