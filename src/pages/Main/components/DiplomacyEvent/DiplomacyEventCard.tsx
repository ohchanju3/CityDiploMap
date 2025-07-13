import { fonts } from "@styles/fonts";
import styled from "styled-components";
import Chip from "@components/ChipBadge";

interface DiplomacyEventCardProps {
  title: string;
  id?: number;
  category: string;
  content: string;
  url?: string;
  isSummary?: boolean;
}

const DiplomacyEventCard = ({
  title,
  content,
  category,
  url,
  isSummary = true,
}: DiplomacyEventCardProps) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <DiplomacyEventCardWrapper>
      <Chip text={category} />
      <DiplomacyEventCardTextContainer $isSummary={isSummary}>
        <h1>{title}</h1>
        <p>{content}</p>
      </DiplomacyEventCardTextContainer>
      {url && <Move onClick={handleClick}>{"바로가기 ->"}</Move>}
    </DiplomacyEventCardWrapper>
  );
};

const DiplomacyEventCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 26rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.75rem;
  gap: 1rem;
  justify-content: center;
`;

const DiplomacyEventCardTextContainer = styled.section<{
  $isSummary?: boolean;
}>`
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

    ${({ $isSummary }) =>
      $isSummary &&
      `
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `}
  }
`;

const Move = styled.p`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.gray02};
  ${fonts.cap16M}
`;

export default DiplomacyEventCard;
