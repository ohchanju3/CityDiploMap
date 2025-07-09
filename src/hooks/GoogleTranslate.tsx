import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export const useGoogleTranslate = () => {
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "ko";

    // 번역 스크립트가 이미 로드되었는지 확인
    if (!document.querySelector('script[src*="translate_a"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      script.onload = () => {
        // Google 번역 API가 완전히 로드되었을 때만 실행
        window.googleTranslateElementInit = () => {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              { pageLanguage: "ko", autoDisplay: false },
              "google_translate_element"
            );
          } else {
            console.error("Google Translate API is not properly loaded.");
          }

          setTimeout(() => {
            const combo = document.querySelector(
              ".goog-te-combo"
            ) as HTMLSelectElement;
            if (combo) {
              combo.value = savedLang;
              combo.dispatchEvent(new Event("change"));
            }
          }, 500);
        };

        // 초기화 함수 실행
        window.googleTranslateElementInit();
      };

      document.body.appendChild(script);
    }
  }, []);

  const setLanguage = (lang: "ko" | "en") => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
    }
    localStorage.setItem("selectedLanguage", lang);
  };

  return { setLanguage };
};
