import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface MainTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  marginTop?: string;
  type?: "mainTitle" | "contentTitle";
  rightBtn?: React.ReactNode;
}

const MainTitle = ({
  title,
  subtitle,
  marginTop = "3.44rem",
  type = "mainTitle",
  rightBtn,
}: MainTitleProps) => {
  return (
    <MainTitleWrapper $marginTop={marginTop} $type={type}>
      {rightBtn ? (
        <HeaderContainer>
          <h1>{title}</h1>
          {rightBtn}
        </HeaderContainer>
      ) : (
        <h1>{title}</h1>
      )}
      {subtitle && <sub>{subtitle}</sub>}
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.section<{
  $marginTop: string;
  $type: "mainTitle" | "contentTitle";
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $type }) => ($type === "contentTitle" ? "1.25rem" : "0.94rem")};
  margin-top: ${({ $marginTop }) => $marginTop};

  h1 {
    ${({ $type }) =>
      $type === "contentTitle" ? fonts.subtitle28B : fonts.title32B};

    color: ${({ theme }) => theme.colors.gray01};
  }

  sub {
    ${fonts.body20S}
    ${({ $type }) =>
      $type === "contentTitle" ? fonts.subtitle24B : fonts.body20S};
    color: ${({ theme }) => theme.colors.gray04};
  }
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default MainTitle;
