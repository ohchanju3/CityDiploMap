import { fonts } from "@styles/fonts";
import type React from "react";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  text: React.ReactNode;
}

const Spinner = ({ text }: SpinnerProps) => {
  return (
    <SpinnerWrapper>
      <SpinnerGif />
      <SpinnerTextCotainer>
        <h1>{text}</h1>
        <p>잠시만 기다려주세요!</p>
      </SpinnerTextCotainer>
    </SpinnerWrapper>
  );
};

export default Spinner;

const spin = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 11.25rem;
`;

const SpinnerGif = styled.div`
  width: 9.38rem;
  height: 9.38rem;
  border-radius: 50%;
  background: conic-gradient(#063a74 0%, #d6e0eb 60%, #d6e0eb 100%);
  mask: radial-gradient(farthest-side, transparent 40%, black 41%);
  -webkit-mask: radial-gradient(farthest-side, transparent 70%, black 41%);
  animation: ${spin} 1s linear infinite;
`;

const SpinnerTextCotainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4.38rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  h1 {
    ${fonts.subtitle28B}
    color: ${({ theme }) => theme.colors.gray02}
  }

  p {
    ${fonts.subtitle24B}
    color: ${({ theme }) => theme.colors.gray04};
  }
`;
