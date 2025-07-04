import { fonts } from "@styles/fonts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export interface CountryTrendsCardProps {
  img?: string;
  title: string;
  content: string;
  id?: number;
  type?: "summary" | "info";
}

const CountryTrendsCard = ({
  img,
  title,
  content,
  // id,
  type = "summary",
}: CountryTrendsCardProps) => {
  const navigate = useNavigate();
  const isSummary = type === "summary";

  const handleClick = () => {
    if (isSummary) navigate(`/recommend`);
  };

  return (
    <CountryTrendsCardWrapper>
      {img && <img src={img} alt={title} />}
      <CountryTrendsCardTextContainer>
        <CountryTrendCardText $clipped={isSummary}>
          <h1>{title}</h1>
          <p>{content}</p>
        </CountryTrendCardText>
        {isSummary && <span onClick={handleClick}>{"자세히 보기 ->"}</span>}
      </CountryTrendsCardTextContainer>
    </CountryTrendsCardWrapper>
  );
};

const CountryTrendsCardWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 14.125rem;
  gap: 1.5rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    max-width: 21.25rem;
    height: 14.125rem;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

const CountryTrendsCardTextContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 0;

  span {
    ${fonts.body18M};
    color: ${({ theme }) => theme.colors.gray02};
    cursor: pointer;
  }
`;

const CountryTrendCardText = styled.section<{ $clipped: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    ${fonts.body20B};
    color: ${({ theme }) => theme.colors.gray01};
    text-overflow: ellipsis;
  }

  p {
    ${fonts.body18M};
    color: ${({ theme }) => theme.colors.gray03};
    white-space: pre-line;
    ${({ $clipped }) =>
      $clipped &&
      `
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      `}
  }
`;

export default CountryTrendsCard;
