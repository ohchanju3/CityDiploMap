import MainTitle from "@components/MainTitle";
import ExchangeCaseCard from "./ExchangeCaseCard";
import styled from "styled-components";
import type { ExchangeCaseData } from "@apis/cooperation/getCountryExchageCase";

interface Props {
  country: string;
  data: ExchangeCaseData[];
}

const CountryExchangeCase = ({ country, data }: Props) => {
  return (
    <>
      <MainTitle
        title="최근에는 어떤 교류가 이루어졌을까요?"
        subtitle={`우리나라와 ${country} 간에 진행된 최신 교류협력 사업 및 프로그램 사례를 소개해요.`}
        type="contentTitle"
        marginTop="9.38rem"
      />

      <ExchangeCaseCardList>
        {data.map((item) => (
          <ExchangeCaseCard
            key={item.exchange_id}
            content={item.exchange_content}
            category={item.exchange_category}
          />
        ))}
      </ExchangeCaseCardList>
    </>
  );
};

const ExchangeCaseCardList = styled.div`
  display: flex;
  gap: 5.25rem;
  margin-top: 5rem;
`;

export default CountryExchangeCase;
