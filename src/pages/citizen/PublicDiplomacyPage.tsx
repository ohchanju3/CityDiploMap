import MainTitle from "@components/MainTitle";

const PublicDiplomacyPage = () => {
  return (
    <>
      <img src="/images/main/banner3.svg" />
      <MainTitle
        title="공공외교 프로그램과 국제교류 행사에 참여해보세요!"
        subtitle="외교부 및 관계기관과 지자체에서 주최하는 프로그램 정보를 확인할 수 있어요."
        marginTop="6.25rem"
      />
      <CityTabWrapper>
        {CITY_LIST.map((city) => (
          <CityTab
            key={city}
            $isActive={selectedCity === city}
            onClick={() => setSelectedCity(city)}
          >
            {country}
          </CityTab>
        ))}
      </CityTabWrapper>
    </>
  );
};

export default PublicDiplomacyPage;
