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
  summaryType?: boolean;
  onClick?: () => void;
}

const ExchangeCaseCard = ({
  content,
  category,
  title,
  img,
  bgColor,
  useCategoryMap = true,
  summaryType = false,
  onClick,
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
        <ContentText $summary={summaryType ?? false}>{content}</ContentText>
        {summaryType && (
          <MoreInfo onClick={onClick}>{"자세히 보기 ->"}</MoreInfo>
        )}
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
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  overflow: hidden;

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
`;

const ContentText = styled.p<{ $summary: boolean }>`
  color: ${({ theme }) => theme.colors.gray03};
  ${fonts.body18M};
  white-space: pre-line;

  ${({ $summary }) =>
    $summary &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

const MoreInfo = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${fonts.cap16M};
  color: ${({ theme }) => theme.colors.gray02};
`;
export default ExchangeCaseCard;
