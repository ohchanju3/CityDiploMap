import { useEffect, useState } from "react";
import CitizenEvents from "./components/CitizenEvents";
import CitizenOpinion from "./components/CitizenOpinion";

const CITY_LIST = [
  "전체",
  "경기도",
  "부산광역시",
  "서울특별시",
  "인천광역시",
  "제주특별자치도",
];

const PublicDiplomacyPage = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage") as "ko" | "en";
    setLanguage(storedLang || "ko");

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem("selectedLanguage") as
        | "ko"
        | "en";
      setLanguage(updatedLang || "ko");
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  const bannerImage = `/images/main/citizenBanner${
    language === "en" ? "_en" : ""
  }.png`;

  return (
    <>
      <img src={bannerImage} alt="public diplomacy banner" />
      <CitizenEvents labelList={CITY_LIST} />
      <CitizenOpinion labelList={CITY_LIST} />
    </>
  );
};

export default PublicDiplomacyPage;
