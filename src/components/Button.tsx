import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text: string;
  img?: string;
  disabled?: boolean;
}

const Button = ({ onClick, text, img, disabled = false }: ButtonProps) => {
  return (
    <ButtonWrapper type="button" onClick={onClick} disabled={disabled}>
      <p>{text}</p>
      {img && <img src={img} />}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ disabled: boolean }>`
  display: flex;
  width: fit-content;
  height: 52px;
  padding: 14px 27px;
  border-radius: 30px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray05 : theme.colors.blue01};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray07 : theme.colors.gray07};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 10px;
  ${fonts.body20S}
`;

export default Button;
