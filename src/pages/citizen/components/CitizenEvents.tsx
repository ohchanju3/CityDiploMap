import { getEvents, type EventsItem } from "@apis/citizen/getEvents";
import MainTitle from "@components/MainTitle";
import TabSelector from "@components/TabSelector";
import ExchangeCaseCard from "@pages/cooperation/components/country/ExchangeCaseCard";
import { fonts } from "@styles/fonts";
import { cityNameToEn } from "@utils/nameToEn";
import { useState, useEffect } from "react";
import styled from "styled-components";

interface CitizenEventsProps {
  labelList: string[];
}

const CitizenEvents = ({ labelList }: CitizenEventsProps) => {
  const [selectedCity, setSelectedCity] = useState(labelList[0] || "전체");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [eventsData, setEventsData] = useState<EventsItem[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerPage(1);
      else if (width < 1280) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCases = eventsData.filter(
    (item) => selectedCity === "전체" || item.local_name === selectedCity
  );

  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);

  const currentItems = filteredCases.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  useEffect(() => {
    setCurrentIndex(0);
    getEvents(selectedCity).then(setEventsData);
  }, [selectedCity]);

  return (
    <>
      <MainTitle
        title="공공외교 프로그램과 국제교류 행사에 참여해보세요!"
        subtitle="외교부 및 관계기관과 지자체에서 주최하는 프로그램 정보를 확인할 수 있어요."
        marginTop="6.25rem"
      />
      <TabSelector
        labelList={labelList}
        selectedLabel={selectedCity}
        onSelect={setSelectedCity}
        marginBottom="2.5rem"
      />

      <EventsCardList>
        {currentItems.map((item) => (
          <ExchangeCaseCard
            key={item.program_id}
            content={item.program_content}
            category={item.local_name}
            title={item.program_name}
            img={`/images/cooperation/card/${
              cityNameToEn[item.local_name] || "default"
            }.png`}
            bgColor="#DFE8F4"
            useCategoryMap={false}
          />
        ))}
      </EventsCardList>

      {totalPages > 1 && (
        <Pagination>
          <PageIndicator>
            <CurrentPage>{currentIndex + 1}</CurrentPage>
            <span style={{ margin: "0 4px" }}>/</span>
            <span>{totalPages}</span>
          </PageIndicator>

          <Arrow onClick={handlePrev} disabled={currentIndex === 0}>
            <img src="/icons/arrowLeft.svg" alt="Previous" />
          </Arrow>
          <Arrow
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
          >
            <img src="/icons/arrowRight.svg" alt="Next" />
          </Arrow>
        </Pagination>
      )}
    </>
  );
};

const EventsCardList = styled.div`
  display: flex;
  gap: 5.25rem;
  flex-wrap: nowrap;
`;

const Pagination = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.25rem;
`;

const PageIndicator = styled.div`
  padding: 0.875rem 1rem;
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

const Arrow = styled.section<{ disabled?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 66.66669rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray04 : theme.colors.gray02};
  background: ${({ theme }) => theme.colors.gray07};
  font-size: 0.95rem;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export default CitizenEvents;
