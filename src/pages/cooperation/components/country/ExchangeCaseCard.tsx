import Chip from "@components/ChipBadge";
import { fonts } from "@styles/fonts";
import { CATEGORY_MAP } from "@utils/countryExchangeCaseMap";
import styled from "styled-components";
interface ExchangeCaseCardProps {
  content: string;
  category: string;
  title?: string;
  img?: string;
  bgColor?: string;
  useCategoryMap?: boolean;
}

const ExchangeCaseCard = ({
  content,
  category,
  title,
  img,
  bgColor,
  useCategoryMap = true,
}: ExchangeCaseCardProps) => {
  const {
    label,
    img: mappedImg,
    bgColor: mappedBgColor,
  } = useCategoryMap
    ? CATEGORY_MAP(category) || { label: category, img: "", bgColor: "" }
    : { label: category, img: img || "", bgColor: bgColor || "" };

  return (
    <ExchangeCaseCardWrapper>
      <ExchangeCaseCardImgContainer $bgColor={mappedBgColor || "#DFE8F4"}>
        <img src={mappedImg} alt={label} />
      </ExchangeCaseCardImgContainer>

      <ExchangeCaseCardTextContainer>
        <Chip text={label} />
        {title && <h1>{title}</h1>}
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

  h1 {
    color: ${({ theme }) => theme.colors.gray01};
    ${fonts.body20B};
  }

  p {
    color: ${({ theme }) => theme.colors.gray03};
    ${fonts.body18M};
    white-space: pre-line;
  }
`;

export default ExchangeCaseCard;
