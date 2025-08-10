import { fonts } from "@styles/fonts";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <img src="/icons/logo.svg" />
      <FooterTextTop>
        <p>(04559) 서울특별시 중구 퇴계로 265</p>
        <p>대표전화 010-1234-5678</p>
        <p>대표메일 diplow@gmail.com</p>
      </FooterTextTop>
      <FooterInfo>
        <FooterText>
          <p>이용안내</p>
          <p>개인정보처리방침</p>
        </FooterText>
        <CopyRight className="notranslate">
          © diplow. All rights reserved.
        </CopyRight>
      </FooterInfo>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray06};
  color: ${({ theme }) => theme.colors.gray02};
  padding: 2.5rem 7rem 1.5rem 7rem;
  img {
    width: 9.38rem;
  }
`;

const FooterTextTop = styled.section`
  ${fonts.body18M};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterInfo = styled.section`
  display: flex;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray05};
  ${fonts.cap16M};
  color: ${({ theme }) => theme.colors.gray03};
  width: 100%;
  justify-content: space-between;
`;

const FooterText = styled.section`
  display: flex;
  gap: 0.5rem;
`;

const CopyRight = styled.p`
  display: flex;
  justify-content: flex-end;
`;
export default Footer;
