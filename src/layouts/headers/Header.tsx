import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import Gnb from "../../components/Gnb";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop />
      <Gnb />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 50px 60px 0px 60px;
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
`;

export default Header;
