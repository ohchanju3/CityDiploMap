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
  padding: 2.19rem 3.75rem 0px 3.75rem;
  gap: 1.56rem;
`;

export default Header;
