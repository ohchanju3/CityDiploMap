import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface SummaryItemProps {
  title: string;
  content: string;
  image: string;
  bgColor: string;
  imgSize?: {
    width?: string;
    height?: string;
  };
  withImageBg?: boolean;
}

const SummaryItem = ({
  title,
  content,
  image,
  bgColor,
  imgSize = { width: "9.8rem", height: "9.8rem" },
  withImageBg = false,
}: SummaryItemProps) => {
  return (
    <BlockWrapper $withImageBg={withImageBg}>
      <SummaryImg $bg={bgColor}>
        {withImageBg ? (
          <SummaryImgBg>
            <StyledImg
              src={image}
              alt={title}
              $width={imgSize.width}
              $height={imgSize.height}
            />
          </SummaryImgBg>
        ) : (
          <StyledImg
            src={image}
            alt={title}
            $width={imgSize.width}
            $height={imgSize.height}
          />
        )}
      </SummaryImg>
      <SummaryTextContainer>
        <h1>{title}</h1>
        <span>{content}</span>
      </SummaryTextContainer>
    </BlockWrapper>
  );
};

export default SummaryItem;

const BlockWrapper = styled.section<{ $withImageBg: boolean }>`
  display: flex;
  gap: 2.81rem;
  padding-bottom: 2.81rem;
  ${({ $withImageBg, theme }) =>
    !$withImageBg && `border-bottom: 1px solid ${theme.colors.gray05};`}
`;

const SummaryImgBg = styled.section`
  display: flex;
  width: 7.7rem;
  height: 7.7rem;
  padding: 2.38rem 1.88rem 2.36rem 1.88rem;
  border-radius: 123px;
  background-color: ${({ theme }) => theme.colors.gray06};
`;

const SummaryImg = styled.div<{ $bg: string }>`
  min-width: 13.7rem;
  height: 14rem;
  border-radius: 1.2rem;
  background-color: ${({ theme, $bg }) =>
    theme.colors[$bg as keyof typeof theme.colors]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img<{
  $width?: string;
  $height?: string;
}>`
  flex-shrink: 0;
  width: ${({ $width }) => $width ?? "9.8rem"};
  height: ${({ $height }) => $height ?? "9.8rem"};
`;

const SummaryTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;

  h1 {
    color: ${({ theme }) => theme.colors.gray02};
    ${fonts.subtitle24B}
  }

  span {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray03};
    ${fonts.body20M};
    line-height: 1.875rem;
  }
`;
