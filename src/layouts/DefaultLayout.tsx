import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./headers/Header";
import FlexLayout from "./FlexLayout";

const DefaultLayout = () => {
  return (
    <OutletWrapper>
      <Header />
      <FlexLayout>
        <Outlet />
      </FlexLayout>
    </OutletWrapper>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
