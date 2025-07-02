import Chip from "@components/ChipBadge";
import { fonts } from "@styles/fonts";
import { CATEGORY_MAP } from "@utils/countryExchangeCaseMap";
import styled from "styled-components";

interface ExchangeCaseCardProps {
  content: string;
  category: string;
}

const ExchangeCaseCard = ({ content, category }: ExchangeCaseCardProps) => {
  const { label, img, bgColor } = CATEGORY_MAP(category);

  return (
    <ExchangeCaseCardWrapper>
      <ExchangeCaseCardImgContainer $bgColor={bgColor}>
        <img src={img} alt={label} />
      </ExchangeCaseCardImgContainer>

      <ExchangeCaseCardTextContainer>
        <Chip text={label} />
        <p>{content}</p>
      </ExchangeCaseCardTextContainer>
    </ExchangeCaseCardWrapper>
  );
};

const ExchangeCaseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
`;

const ExchangeCaseCardImgContainer = styled.section<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  height: 12.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

const ExchangeCaseCardTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  p {
    color: ${({ theme }) => theme.colors.gray03};
    ${fonts.body18M};
  }
`;

export default ExchangeCaseCard;
