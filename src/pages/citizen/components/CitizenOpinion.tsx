import {
  getCitizenOpinion,
  type OpinionItem,
} from "@apis/citizen/getCitizenOpinion";
import Button from "@components/Button";
import MainTitle from "@components/MainTitle";
import TabSelector from "@components/TabSelector";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import OpinionCard from "./OpinionCard";
import { fonts } from "@styles/fonts";
import OpinionModal from "./OpinionModal";

interface opinionProps {
  labelList: string[];
}

const CitizenOpinion = ({ labelList }: opinionProps) => {
  const [selectedCity, setSelectedCity] = useState(labelList[0] || "전체");
  const [opinionData, setOpinionData] = useState<OpinionItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ITEMS_PER_PAGE = 3;
  const PAGE_GROUP_SIZE = 3;
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCitizenOpinion(selectedCity).then((data) => {
      setOpinionData(data);
      setCurrentPage(1);
    });
  }, [selectedCity]);

  const totalPages = Math.ceil(opinionData.length / ITEMS_PER_PAGE);

  const currentItems = opinionData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const currentGroup = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE);
  const startPage = currentGroup * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    tabRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 모달 open일때 스크롤 막기
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <MainTitle
        title="함께하는 지방외교, 여러분의 아이디어를 기다려요!"
        subtitle="지자체 대상 프로그램 아이디어 제안, 개선 의견 등 자유로운 생각을 남겨주세요."
        marginTop="9.06rem"
        rightBtn={
          <Button
            text="의견 남기기"
            img="/icons/edit.svg"
            onClick={() => setIsModalOpen(true)}
          />
        }
      />
      <div ref={tabRef}>
        <TabSelector
          labelList={labelList}
          selectedLabel={selectedCity}
          onSelect={setSelectedCity}
          marginBottom="2.5rem"
        />
      </div>
      <OpinionList>
        {currentItems.map((data) => (
          <OpinionCard
            key={data.opinion_id}
            city={data.local_name}
            title={data.title}
            content={data.content}
          />
        ))}
      </OpinionList>

      <Pagination>
        {startPage > 1 && (
          <Arrow onClick={() => handlePageChange(startPage - 1)}>
            <img src="/icons/arrowLeft.svg" alt="Previous Group" />
          </Arrow>
        )}

        {pageNumbers.map((pageNum) => (
          <PageNumber
            key={pageNum}
            $active={pageNum === currentPage}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </PageNumber>
        ))}

        {endPage < totalPages && (
          <Arrow onClick={() => handlePageChange(endPage + 1)}>
            <img src="/icons/arrowRight.svg" alt="Next Group" />
          </Arrow>
        )}
      </Pagination>

      {isModalOpen && (
        <ModalOverlay>
          <OpinionModal />
        </ModalOverlay>
      )}
    </>
  );
};

const OpinionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.81rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.19rem;
  margin-top: 3.75rem;
`;

const PageNumber = styled.div<{ $active: boolean }>`
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? "none" : theme.colors.gray05)};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.blue01 : theme.colors.gray07};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.gray07 : theme.colors.gray05};
  font-weight: 600;
  cursor: pointer;
  ${fonts.body18S};
`;

const Arrow = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  background-color: ${({ theme }) => theme.colors.gray07};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 18, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CitizenOpinion;
