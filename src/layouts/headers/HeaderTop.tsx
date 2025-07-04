import { fonts } from "@styles/fonts";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LanguageModal from "../../components/LanguageModal";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const navigate = useNavigate();

  // MutationObserver 관련 코드 수정
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.documentElement.style.height = "auto";
    });

    // observer.observe()를 한 번만 실행하도록 최적화
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // cleanup 함수 추가하여 observer를 제거
    return () => observer.disconnect();
  }, []);

  // 초기 언어 로드 및 Google Translate 초기화
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) setLanguage(savedLang);

    // 구글 번역 스크립트 삽입 여부 확인
    if (!document.querySelector('script[src*="translate_a"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "ko",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        setTimeout(() => {
          const langToApply = savedLang || "ko";
          const gtCombo = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement;
          if (gtCombo) {
            gtCombo.value = langToApply;
            gtCombo.dispatchEvent(new Event("change"));
          }
        }, 500);
      };

      document.body.appendChild(script);
    }

    // cleanup: script 제거
    return () => {
      const script = document.querySelector('script[src*="translate_a"]');
      if (script && script.parentElement) {
        script.parentElement.removeChild(script); // 부모 요소에서만 제거
      }
    };
  }, []);

  // 언어 선택 핸들러
  const handleSelectLanguage = (lang: "ko" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
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

      {/* 구글 번역 엘리먼트 (숨김 처리) */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </HeaderTopWrapper>
  );
};

export default HeaderTop;

// 스타일 정의
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
