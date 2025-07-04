import { useState, useEffect } from "react";
import styled from "styled-components";
import EnvIssueCard from "./EnvIssueCard";
import type { EnvIssueItem } from "@apis/recommend/getEnvIssue";

interface EnvIssueSliderProps {
  data: EnvIssueItem[];
}

const fixedImages = [
  "/images/recommend/envCard1.png",
  "/images/recommend/envCard2.png",
  "/images/recommend/envCard3.png",
  "/images/recommend/envCard4.png",
  "/images/recommend/envCard5.png",
];

const EnvIssueCardList = ({ data }: EnvIssueSliderProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 900) {
        setItemsPerPage(1);
      } else if (width < 1440) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentItems = data.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <Wrapper>
      <Header>
        {totalPages > 1 && (
          <Arrow onClick={handlePrev}>
            <img src="/icons/arrowLeft.svg" />
          </Arrow>
        )}
        <Cards $columns={itemsPerPage}>
          {currentItems.map((item, idx) => (
            <EnvIssueCard
              key={startIdx + idx}
              img={fixedImages[(startIdx + idx) % fixedImages.length]}
              date={item.pub_date}
              content={item.environ_data_title}
            />
          ))}
        </Cards>
        {totalPages > 1 && (
          <Arrow onClick={handleNext}>
            <img src="/icons/arrowRight.svg" />
          </Arrow>
        )}
      </Header>

      {totalPages > 1 && (
        <DotContainer>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Dot
              key={i}
              $active={i === currentPage}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </DotContainer>
      )}
    </Wrapper>
  );
};

export default EnvIssueCardList;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
`;

const Cards = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 3.44rem;
  flex: 1;
`;

const Arrow = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  background: ${({ theme }) => theme.colors.gray07};
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DotContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2.19rem;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "3.12rem" : "0.6rem")};
  height: 0.6rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue01};
  opacity: ${({ $active }) => ($active ? "0.8" : "0.2")};
  transition: all 0.3s ease;
`;
