import { fonts } from "@styles/fonts";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LanguageModal from "../../components/LanguageModal";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const navigate = useNavigate();

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
      <img src="/icons/logo.svg" onClick={() => navigate("/")} />
      <HeaderTopLang onClick={() => setIsOpen(!isOpen)}>
        <HeaderTopLagIcon src="/icons/globe.svg" />
        Language
        <HeaderTopLagIcon src="/icons/arrowDown.svg" />
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
  justify-content: space-between;
  position: relative;

  img {
    cursor: pointer;
  }
`;

const HeaderTopLang = styled.section`
  color: ${({ theme }) => theme.colors.gray02};
  ${fonts.header16M}
  gap: 0.125rem;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const HeaderTopLagIcon = styled.img``;

export default HeaderTop;
