import MainTitle from "@components/MainTitle";
import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface EnvIssueProps {
  country: string;
}

const ExchangeEnvIssue = ({ country }: EnvIssueProps) => {
  return (
    <>
      <MainTitle
        title={`${country} 환경 이슈`}
        type="contentTitle"
        marginTop="9.06rem"
      />
      <EnvWrapper>
        <EnvTitleContainer>
          <EnvTitleText>
            <h1>환경이슈</h1>
            <p>
              지금 주목해야 할<br />
              {country}의 환경 이슈에요.
            </p>
          </EnvTitleText>
          <EnvTitleImgContainer>
            <img src="/images/recommend/envTitle.png" />
          </EnvTitleImgContainer>
        </EnvTitleContainer>
      </EnvWrapper>
    </>
  );
};

const EnvWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2.81rem;
`;

const EnvTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.38rem;
  padding: 2rem;
  width: 17.6rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue08};
`;

const EnvTitleText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${fonts.subtitle24B}
    color: ${({ theme }) => theme.colors.gray01};
  }

  p {
    ${fonts.cap16M};
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

const EnvTitleImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 10rem;
    height: 9.8rem;
    flex-shrink: 0;
  }
`;

export default ExchangeEnvIssue;
