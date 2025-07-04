import { fonts } from "@styles/fonts";
import React from "react";
import styled, { css } from "styled-components";

type Language = "ko" | "en";

interface LanguageModalProps {
  onSelectLanguage: (lang: Language) => void;
  currentLanguage?: Language;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
  onSelectLanguage,
  currentLanguage,
}) => {
  return (
    <ModalWrapper>
      <Button
        onClick={() => onSelectLanguage("ko")}
        selected={currentLanguage === "ko"}
        className="notranslate"
        translate="no"
      >
        한국어
      </Button>
      <Button
        onClick={() => onSelectLanguage("en")}
        selected={currentLanguage === "en"}
        className="notranslate"
        translate="no"
      >
        English (영어)
      </Button>
    </ModalWrapper>
  );
};

export default LanguageModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 140px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  background: white;
  width: 176px;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 9px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.colors.gray05}
      transparent;
  }

  &::before {
    content: "";
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    z-index: 1;
  }
`;

const Button = styled.button<{ selected?: boolean }>`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.375rem;
  ${fonts.cap16M}
  cursor: pointer;
  width: 100%;
  text-align: left;

  ${({ selected, theme }) =>
    selected
      ? css`
          background: #eef2f7;
          color: ${theme.colors.blue01};
          ${fonts.cap16B}
        `
      : css`
          background: transparent;
          color: ${theme.colors.gray02};
        `}
`;
