import MainTitle from "@components/MainTitle";
import SummaryItem from "./SummaryItem";
import { CountryNameToEn } from "@utils/nameToEn";
import type { CountryInfoItem } from "@apis/recommend/getCountryInfo";
import styled from "styled-components";

interface InfoProps {
  country: string;
  data: CountryInfoItem;
}

const ExchangeInfo = ({ country, data }: InfoProps) => {
  const imageName = CountryNameToEn[country];

  const summaries = [
    {
      title: `${country} 기본 정보`,
      content: data.nation_info,
      image: `/images/flag/${imageName}.png`,
      bgColor: "blue07",
      imgSize: { width: "3.9rem", height: "2.9rem" },
      withImageBg: true,
      isBorder: true,
    },
    {
      title: `${country} 경제 현황`,
      content: data.nation_economic,
      image: `/images/recommend/money.png`,
      bgColor: "yellowCard",
      imgSize: { width: "9.75rem", height: "9.75rem" },
      isBorder: true,
    },
    {
      title: "우리나라와의 관계",
      content: data.nation_relation,
      image: `/images/flag/Korea.png`,
      bgColor: "blue07",
      imgSize: { width: "3.9rem", height: "2.9rem" },
      withImageBg: true,
      isBorder: true,
    },
  ];

  return (
    <>
      <MainTitle
        title={`${country} 기본 정보`}
        marginTop="9.06rem"
        type="contentTitle"
      />

      <SummaryList>
        {summaries.map((item, idx) => (
          <SummaryItem
            key={idx}
            title={item.title}
            image={item.image}
            content={item.content}
            bgColor={item.bgColor}
            imgSize={item.imgSize}
            withImageBg={item.withImageBg}
          />
        ))}
      </SummaryList>
    </>
  );
};

const SummaryList = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.81rem;
  gap: 2.81rem;
`;

export default ExchangeInfo;
