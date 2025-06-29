import { fonts } from "@styles/fonts";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const gnbItem = [
  { label: "교류 협력 현황", onClick: "/cooperation" },
  { label: "교류 전략 추천", onClick: "/recommend" },
  { label: "시민 외교 참여", onClick: "/citizen" },
];

const Gnb = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <GnbWrapper>
      {gnbItem.map((item) => {
        const isActive = location.pathname === item.onClick;
        return (
          <GnbContainer
            key={item.label}
            $isActive={isActive}
            onClick={() => navigate(item.onClick)}
          >
            <p>{item.label}</p>
            <img src="/icons/arrowDown.svg" />
          </GnbContainer>
        );
      })}
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

const GnbContainer = styled.section<{ $isActive: boolean }>`
  ${fonts.header20B};
  height: 56px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.blue01 : theme.colors.gray02};

  img {
    width: 20px;
    height: 20px;
  }
`;

export default Gnb;
