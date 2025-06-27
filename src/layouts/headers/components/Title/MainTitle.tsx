import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface MainTitleProps {
  title: string;
  subtitle?: string;
  marginTop?: string;
  type?: "mainTitle" | "contentTitle";
}

const MainTitle = ({
  title,
  subtitle,
  marginTop = "3.44rem",
  type = "mainTitle",
}: MainTitleProps) => {
  return (
    <MainTitleWrapper $marginTop={marginTop} $type={type}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.section<{
  $marginTop: string;
  $type: "mainTitle" | "contentTitle";
}>`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
  margin-top: ${({ $marginTop }) => $marginTop};

  h1 {
    ${({ $type }) =>
      $type === "contentTitle" ? fonts.subtitle28B : fonts.title32B};

    color: ${({ theme }) => theme.colors.gray01};
  }

  p {
    ${fonts.body20S}
    color: ${({ theme }) => theme.colors.gray04};
  }
`;
export default MainTitle;
