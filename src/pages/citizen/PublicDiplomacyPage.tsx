import CitizenEvents from "./components/CitizenEvents";

const CITY_LIST = [
  "전체",
  "경기도",
  "부산광역시",
  "서울특별시",
  "인천광역시",
  "제주특별자치도",
];

const PublicDiplomacyPage = () => {
  return (
    <>
      <img src="/images/main/banner3.svg" />
      <CitizenEvents labelList={CITY_LIST} />
    </>
  );
};

export default PublicDiplomacyPage;
