import { fonts } from "@styles/fonts";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LanguageModal from "../../components/LanguageModal";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
    googleTranslateElementInitLoaded?: boolean;
  }
}

const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const navigate = useNavigate();

  // Google 번역기 초기화 및 삽입
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") as
      | "ko"
      | "en"
      | null;
    if (savedLang) setLanguage(savedLang);

    // google_translate_element DOM 생성
    if (!document.getElementById("google_translate_element")) {
      const div = document.createElement("div");
      div.id = "google_translate_element";
      div.style.display = "none";
      document.body.appendChild(div);
    }

    if (window.googleTranslateElementInitLoaded) return;

    window.googleTranslateElementInit = () => {
      window.googleTranslateElementInitLoaded = true;

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "ko", autoDisplay: false },
          "google_translate_element"
        );

        setTimeout(() => {
          const gtCombo = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement;
          if (gtCombo && savedLang) {
            gtCombo.value = savedLang;
            gtCombo.dispatchEvent(new Event("change"));
          }
        }, 500);
      }
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSelectLanguage = (lang: "ko" | "en") => {
    setLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    setIsOpen(false);

    const gtCombo = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (gtCombo) {
      gtCombo.value = lang;
      gtCombo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <HeaderTopWrapper>
      <img src="/icons/logo.svg" onClick={() => navigate("/")} />

      <HeaderTopLang onClick={() => setIsOpen(!isOpen)} className="notranslate">
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

export default HeaderTop;

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
