import MainTitle from "@components/MainTitle";

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
    </>
  );
};

export default ExchangeEnvIssue;
