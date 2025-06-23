import { fonts } from "@styles/fonts";
import styled from "styled-components";

const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
      <HeaderTopLang>
        <HeaderTopLagIcon src="/icon/globe.svg" />
        Language
        <HeaderTopLagIcon src="/icon/arrowDown.svg" />
      </HeaderTopLang>
    </HeaderTopWrapper>
  );
};

const HeaderTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const HeaderTopLang = styled.section`
  color: ${({ theme }) => theme.colors.gray01};
  //TODO: 추후 수정 필요
  ${fonts.header20M}
  gap: 0.125rem;
  display: flex;
  cursor: pointer;
`;

const HeaderTopLagIcon = styled.img``;

export default HeaderTop;
