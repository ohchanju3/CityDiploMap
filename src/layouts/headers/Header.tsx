import styled from "styled-components";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 50px 60px 0px 60px;
`;

export default Header;
