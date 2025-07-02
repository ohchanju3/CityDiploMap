import { useEffect, useState } from "react";
import styled from "styled-components";
import DiplomacyEventCard from "./DiplomacyEventCard";
import { fonts } from "@styles/fonts";
import type { EventItem } from "@apis/main/getDipEvent";

interface CountryTrendCardListProps {
  data: EventItem[];
}

const DiplomacyEventList = ({ data }: CountryTrendCardListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setItemsPerView(width < 1420 ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerView);
  const start = currentIndex * itemsPerView;
  const end = start + itemsPerView;
  const visibleData = data.slice(start, end);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <Wrapper>
      <CardTrack>
        {visibleData.map((item) => (
          <CardWrapper key={item.event_id}>
            <DiplomacyEventCard
              id={item.event_id}
              title={item.event_title}
              content={item.event_content}
              category={item.event_category}
              url={item.url}
            />
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
  gap: 75px;
`;

const CardWrapper = styled.div`
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
