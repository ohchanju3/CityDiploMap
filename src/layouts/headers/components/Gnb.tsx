import { fonts } from "@styles/fonts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const gnbItem = [
  { label: "도시 외교 현황", onClick: "/" },
  { label: "국별 동향 분석", onClick: "/" },
  { label: "교류 전략 추천", onClick: "/" },
  { label: "환경외교 허브", onClick: "/" },
  { label: "성과 뷰어", onClick: "/" },
  { label: "사례 데이터 뱅크", onClick: "/" },
  { label: "시민 외교 스테이션", onClick: "/" },
];

const Gnb = () => {
  const navigate = useNavigate();
  return (
    <GnbWrapper>
      {gnbItem.map((item) => (
        <GnbContainer key={item.label} onClick={() => navigate(item.onClick)}>
          <p>{item.label} </p>
          <img src="/icon/arrowDown.svg" />
        </GnbContainer>
      ))}
    </GnbWrapper>
  );
};

const GnbWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray05};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
`;

const GnbContainer = styled.section`
  ${fonts.header20B};
  height: 56px;
  padding: 0px 16px;
  color: ${({ theme }) => theme.colors.gray02};
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default Gnb;
