import type { TrendItem } from "@apis/main/getCountryTrends";
import MainTitle from "@components/MainTitle";
import CountryTrendsContainer from "@pages/Main/components/CountryTrends/CountryTrendsContainer";

interface ExchangeRecentProps {
  country: string;
  data: TrendItem[];
}

const ExchangeRecent = ({ country, data }: ExchangeRecentProps) => {
  return (
    <>
      <MainTitle
        title={`${country} 최신 동향`}
        type="contentTitle"
        marginTop="9.06rem"
      />
      <div style={{ marginTop: "2.81rem" }}>
        <CountryTrendsContainer data={data} type="info" />
      </div>
    </>
  );
};

export default ExchangeRecent;
