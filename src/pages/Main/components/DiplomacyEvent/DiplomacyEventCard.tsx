import { fonts } from "@styles/fonts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { CountryTrendsCardProps } from "../CountryTrends/CountryTrendsCard";

const DiplomacyEventCard = ({ title, content, id }: CountryTrendsCardProps) => {
  const navigate = useNavigate();

  //TODO: 경로 수정 필요 ~~
  const handleClick = () => {
    navigate(`/my/${id}`);
  };

  return (
    <DiplomacyEventCardWrapper>
      <DiplomacyEventCardTextContainer>
        <h1>{title}</h1>
        <p>{content}</p>
      </DiplomacyEventCardTextContainer>
      <Move onClick={handleClick}>{"바로가기 ->"}</Move>
    </DiplomacyEventCardWrapper>
  );
};

const DiplomacyEventCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 15rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.75rem;
  gap: 1rem;
  justify-content: center;
`;

const DiplomacyEventCardTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.gray01};
    ${fonts.body20B};
  }

  p {
    color: ${({ theme }) => theme.colors.gray03};
    ${fonts.body18M};
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const Move = styled.p`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.gray02};
`;

export default DiplomacyEventCard;
