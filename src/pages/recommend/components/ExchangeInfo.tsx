import MainTitle from "@components/MainTitle";
import SummaryItem from "./SummaryItem";
import { CountryNameToEn } from "@utils/nameToEn";
import type { CountryInfoData } from "@apis/recommend/getCountryInfo";

interface InfoProps {
  country: string;
  data: CountryInfoData[];
}

const ExchangeInfo = ({ country, data }: InfoProps) => {
  const imageName = CountryNameToEn[country];

  return (
    <>
      <MainTitle
        title={`${country} 기본 정보`}
        marginTop="9.06rem"
        type="contentTitle"
      />
      <div style={{ marginTop: "2.81rem" }}>
        <SummaryItem
          title={country}
          image={`/images/flag/${imageName}.png`}
          content={data[0].nation_info}
          bgColor="blue07"
          imgSize={{ width: "3.9rem", height: "2.9rem" }}
          withImageBg={true}
        />
      </div>
    </>
  );
};

export default ExchangeInfo;
