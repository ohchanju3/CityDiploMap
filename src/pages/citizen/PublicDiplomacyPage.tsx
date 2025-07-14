import CitizenEvents from "./components/CitizenEvents";
import CitizenOpinion from "./components/CitizenOpinion";
import { useLanguage } from "src/hooks/useLanguage";

const CITY_LIST = [
  "전체",
  "경기도",
  "부산광역시",
  "서울특별시",
  "인천광역시",
  "제주특별자치도",
];

const PublicDiplomacyPage = () => {
  const language = useLanguage();

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
