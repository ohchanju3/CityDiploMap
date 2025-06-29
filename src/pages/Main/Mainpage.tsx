import MainTitle from "src/components/Title/MainTitle";
import CountryTrendsContainer from "./components/CountryTrends/CountryTrendsContainer";

const Mainpage = () => {
  return (
    <>
      <MainTitle title="국가별 최신 동향" />
      <CountryTrendsContainer />
    </>
  );
};

export default Mainpage;
