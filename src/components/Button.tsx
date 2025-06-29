import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text: string;
  img?: string;
  disabled?: boolean;
  bgColor?: string;
}

const Button = ({
  onClick,
  text,
  img,
  disabled = false,
  bgColor,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      type="button"
      onClick={onClick}
      disabled={disabled}
      $bgColor={bgColor}
    >
      <p>{text}</p>
      {img && <img src={img} />}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ disabled: boolean; $bgColor?: string }>`
  display: flex;
  width: fit-content;
  height: 52px;
  padding: 14px 27px;
  border-radius: 30px;

  background-color: ${({ theme, disabled, $bgColor }) => {
    if (disabled) return theme.colors.gray05;
    if ($bgColor === "green") return theme.colors.green01;
    return theme.colors.blue01;
  }};

  color: ${({ theme }) => theme.colors.gray07};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 10px;
  ${fonts.body20S}

  p {
    white-space: nowrap;
  }
`;

export default Button;
