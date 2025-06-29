import { useState } from "react";
import styled from "styled-components";
import DiplomacyEventCard from "./DiplomacyEventCard";
import { fonts } from "@styles/fonts";
import type { EventItem } from "@apis/main/getDipEvent";

interface CountryTrendCardListProps {
  data: EventItem[];
}

const ITEMS_PER_VIEW = 3;

const DiplomacyEventList = ({ data }: CountryTrendCardListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(data.length / ITEMS_PER_VIEW);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const start = currentIndex * ITEMS_PER_VIEW;
  const end = start + ITEMS_PER_VIEW;
  const visibleData = data.slice(start, end);

  return (
    <Wrapper>
      <CardTrack>
        {visibleData.map((item) => (
          <CardWrapper key={item.id}>
            <DiplomacyEventCard {...item} />
          </CardWrapper>
        ))}
      </CardTrack>

      <Pagination>
        <PageIndicator>
          <CurrentPage>{currentIndex + 1}</CurrentPage>
          <span style={{ margin: "0 4px" }}>/</span>
          <span>{totalPages}</span>
        </PageIndicator>

        <Arrow onClick={handlePrev}>
          <img src="/icons/arrowLeft.svg" />
        </Arrow>
        <Arrow onClick={handleNext}>
          {" "}
          <img src="/icons/arrowRight.svg" />
        </Arrow>
      </Pagination>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2.81rem;
`;

const CardTrack = styled.div`
  display: flex;
  gap: 87px;
`;

const CardWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const Pagination = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const PageIndicator = styled.div`
  padding: 0.875rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.blue01};
  border-radius: 62.5rem;
  font-size: 0.95rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  color: ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.gray07};
  display: flex;
  align-items: center;
  ${fonts.cap16B}
`;

const CurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.blue01};
`;

const Arrow = styled.section`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 66.66669rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  color: ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.gray07};
  font-size: 0.95rem;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default DiplomacyEventList;
