import MainTitle from "src/components/Title/MainTitle";
import CountryTrendsContainer from "./components/CountryTrends/CountryTrendsContainer";

const Mainpage = () => {
  const trendsData = [
    {
      img: "/icons/sample.png",
      title: "한-인도네시아 디지털 협력 회의",
      content:
        "한국과 인도네시아가 디지털 경제 협력을 강화하기 위해 회의를 열었습니다.",
      onClick: () => alert("자세히 보기 1"),
    },
    {
      img: "/icons/sample.png",
      title: "콜롬비아 문화 교류 행사",
      content:
        "서울에서 열린 콜롬비아 전통예술 전시회를 통해 양국 교류를 강화했습니다.",
      onClick: () => alert("자세히 보기 2"),
    },
    {
      img: "/icons/sample.png",
      title: "한-인도네시아 디지털 협력 회의",
      content:
        "한국과 인도네시아가 디지털 경제 협력을 강화하기 위해 회의를 열었습니다.",
      onClick: () => alert("자세히 보기 1"),
    },
    {
      img: "/icons/sample.png",
      title: "콜롬비아 문화 교류 행사",
      content:
        "서울에서 열린 콜롬비아 전통예술 전시회를 통해 양국 교류를 강화했습니다.",
      onClick: () => alert("자세히 보기 2"),
    },
  ];

  return (
    <>
      <MainTitle title="국가별 최신 동향" />
      <CountryTrendsContainer data={trendsData} />
    </>
  );
};

export default Mainpage;
