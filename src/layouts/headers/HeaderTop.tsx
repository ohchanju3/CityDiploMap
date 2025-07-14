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

  // Google 번역기 초기화 및 언어 기억 적용
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

    // 중복 초기화 방지
    if (window.googleTranslateElementInitLoaded) return;

    window.googleTranslateElementInit = () => {
      window.googleTranslateElementInitLoaded = true;

      new window.google.translate.TranslateElement(
        { pageLanguage: "ko", autoDisplay: false },
        "google_translate_element"
      );

      const trySetLanguage = () => {
        const gtCombo = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement;
        if (gtCombo && savedLang) {
          gtCombo.value = savedLang;
          gtCombo.dispatchEvent(new Event("change"));

          gtCombo.focus();
          gtCombo.blur();

          document.body.style.display = "none";
          void document.body.offsetHeight;
          document.body.style.display = "";
        } else {
          setTimeout(trySetLanguage, 200);
        }
      };

      setTimeout(trySetLanguage, 500);
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 언어 선택 처리
  const handleSelectLanguage = (lang: "ko" | "en") => {
    setLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    window.dispatchEvent(new Event("languageChanged"));

    const gtCombo = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (gtCombo) {
      gtCombo.value = lang;

      // 2회 연속 트리거
      const changeTwice = () => {
        gtCombo.dispatchEvent(new Event("change"));
        setTimeout(() => {
          gtCombo.dispatchEvent(new Event("change"));

          gtCombo.focus();
          gtCombo.blur();
          document.body.style.display = "none";
          void document.body.offsetHeight;
          document.body.style.display = "";

          setIsOpen(false);
        }, 200);
      };

      setTimeout(changeTwice, 100);
    } else {
      setIsOpen(false);
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
