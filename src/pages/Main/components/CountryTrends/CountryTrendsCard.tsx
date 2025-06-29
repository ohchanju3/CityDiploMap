import { fonts } from "@styles/fonts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export interface CountryTrendsCardProps {
  img?: string;
  title: string;
  content: string;
  id?: number;
}

const CountryTrendsCard = ({
  img,
  title,
  content,
  id,
}: CountryTrendsCardProps) => {
  const navigate = useNavigate();

  //TODO: 경로 수정 필요 ~~
  const handleClick = () => {
    navigate(`/my/${id}`);
  };

  return (
    <CountryTrendsCardWrapper>
      <img src={img} />
      <CountryTrendsCardTextContainer>
        <CountryTrendCardText>
          <h1>{title}</h1>
          <p>{content}</p>
        </CountryTrendCardText>
        <span onClick={handleClick}>{"자세히 보기 ->"}</span>
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

const CountryTrendCardText = styled.section`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  h1 {
    text-overflow: ellipsis;
    ${fonts.body20B};
    color: ${({ theme }) => theme.colors.gray01};
  }

  p {
    ${fonts.body18M};
    color: ${({ theme }) => theme.colors.gray03};
    overflow: hidden;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export default CountryTrendsCard;
