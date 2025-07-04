import Chip from "@components/ChipBadge";
import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface cardProps {
  city: string;
  title: string;
  content: string;
}

const OpinionCard = ({ city, title, content }: cardProps) => {
  return (
    <OpinionCardWrapper>
      <OpinionCardTitle>
        <Chip text={city} />
        <h1>{title}</h1>
      </OpinionCardTitle>
      {content}
    </OpinionCardWrapper>
  );
};

const OpinionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.56rem;
  ${fonts.body20M};
  color: ${({ theme }) => theme.colors.gray03};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 12px;
`;

const OpinionCardTitle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  h1 {
    ${fonts.subtitle24B};
    color: ${({ theme }) => theme.colors.gray01};
  }
`;

export default OpinionCard;
