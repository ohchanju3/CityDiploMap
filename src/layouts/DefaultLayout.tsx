import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./headers/Header";

const DefaultLayout = () => {
  return (
    <OutletWrapper>
      <Header />
      <Outlet />
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
