import { useEffect, useState } from "react";

export type Language = "ko" | "en";

export const useLanguage = (): Language => {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage") as Language;
    setLanguage(storedLang || "ko");

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem("selectedLanguage") as Language;
      setLanguage(updatedLang || "ko");
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  return language;
};
