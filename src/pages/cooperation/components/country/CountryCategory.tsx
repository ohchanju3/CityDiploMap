import MainTitle from "@components/MainTitle";
import type { CountryProps } from "./CountryMap";
import { withPostposition } from "@utils/postPosition";

const CountryCategory = ({ country }: CountryProps) => {
  const countryWithPost = country
    ? withPostposition(country, ["과", "와"])
    : "";

  return (
    <>
      <MainTitle
        title="어떤 분야에서 활발히 교류하고 있을까요?"
        subtitle={`${countryWithPost}의 교류가 어떤 협력 분야에 집중되어 있는지, 4대 분야별 비율을 통해 확인할 수 있어요.`}
        marginTop="6.25rem"
      />
    </>
  );
};

export default CountryCategory;
