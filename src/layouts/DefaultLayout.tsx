import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./headers/Header";
import FlexLayout from "./FlexLayout";
import Footer from "./footers/Footer";

const DefaultLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <FlexLayout>
          <Outlet />
        </FlexLayout>
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default DefaultLayout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
