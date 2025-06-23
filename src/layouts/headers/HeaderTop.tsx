import { fonts } from "@styles/fonts";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LanguageModal from "./components/LanguageModal";

const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleSelectLanguage = (lang: "ko" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  return (
    <HeaderTopWrapper>
      <HeaderTopLang onClick={() => setIsOpen(!isOpen)}>
        <HeaderTopLagIcon src="/icon/globe.svg" />
        Language
        <HeaderTopLagIcon src="/icon/arrowDown.svg" />
      </HeaderTopLang>

      {isOpen && (
        <LanguageModal
          currentLanguage={language}
          onSelectLanguage={handleSelectLanguage}
        />
      )}
    </HeaderTopWrapper>
  );
};

const HeaderTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const HeaderTopLang = styled.section`
  color: ${({ theme }) => theme.colors.gray01};
  ${fonts.header20M}
  gap: 0.125rem;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const HeaderTopLagIcon = styled.img``;

export default HeaderTop;
