import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text: string;
  img?: string;
}

const Button = ({ onClick, text, img }: ButtonProps) => {
  return (
    <ButtonWrapper type="button" onClick={onClick}>
      <p>{text}</p>
      {img && <img src={img} />}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;
  width: fit-content;
  padding: 14px 27px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.blue01};
  color: ${({ theme }) => theme.colors.gray07};
  gap: 10px;
  ${fonts.body20S}
`;

export default Button;
