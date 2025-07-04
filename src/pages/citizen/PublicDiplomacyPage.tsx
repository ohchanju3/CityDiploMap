import Button from "@components/Button";
import MainTitle from "@components/MainTitle";
import TabSelector from "@components/TabSelector";
import { useState } from "react";

const CITY_LIST = [
  "전체",
  "경기도",
  "부산광역시",
  "서울특별시",
  "인천광역시",
  "제주특별자치도",
];

const PublicDiplomacyPage = () => {
  const [selectedCity, setSelectedCity] = useState("전체");

  return (
    <>
      <img src="/images/main/banner3.svg" />
      <MainTitle
        title="공공외교 프로그램과 국제교류 행사에 참여해보세요!"
        subtitle="외교부 및 관계기관과 지자체에서 주최하는 프로그램 정보를 확인할 수 있어요."
        marginTop="6.25rem"
      />
      <TabSelector
        labelList={CITY_LIST}
        selectedLabel={selectedCity}
        onSelect={setSelectedCity}
        marginBottom="2.5rem"
      />
    </>
  );
};

export default PublicDiplomacyPage;
