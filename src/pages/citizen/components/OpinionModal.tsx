import { useState } from "react";
import styled from "styled-components";
import { fonts } from "@styles/fonts";
import FilterItem from "@components/Filters/FilterItem";
import Button from "@components/Button";
import { postOpinion } from "@apis/citizen/postOpinion";

const CITY_LIST = [
  "전체",
  "경기도",
  "부산광역시",
  "서울특별시",
  "인천광역시",
  "제주특별자치도",
];

const OpinionModal = ({
  onClose,
  onSubmitSuccess,
}: {
  onClose: () => void;
  onSubmitSuccess: () => void;
}) => {
  const [selectedCity, setSelectedCity] = useState<string>("전체");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const isAllSelected = title.trim() !== "" && content.trim() !== "";

  const getCityId = (city: string): number => {
    const id = CITY_LIST.indexOf(city);
    return id;
  };

  const handleSubmit = async () => {
    const payload = {
      local: getCityId(selectedCity),
      title,
      content,
    };

    const result = await postOpinion(payload);

    if (result === null) {
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    } else {
      alert("의견이 성공적으로 제출되었습니다!");
      onSubmitSuccess();
    }
  };

  return (
    <OpinionModalWrapper>
      <Header>
        <img src="/icons/close.svg" onClick={onClose} />
      </Header>
      <Title>공공외교에 대한 여러분의 생각을 남겨주세요</Title>
      <CityChoice>
        <FilterItem
          title="지방자치단체"
          options={CITY_LIST}
          selected={selectedCity}
          onSelect={setSelectedCity}
          placeholder="전체"
          gap="1.88rem"
        />
      </CityChoice>
      <TitleContainer>
        <h1>게시글 제목</h1>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </TitleContainer>
      <TitleContainer>
        <h1>게시글 내용</h1>
        <ContentInput
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </TitleContainer>
      <ButtonContainer>
        <Button
          text="등록하기"
          img="/icons/arrowUpRight.svg"
          onClick={handleSubmit}
          disabled={!isAllSelected}
        />
      </ButtonContainer>
    </OpinionModalWrapper>
  );
};

const OpinionModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.06rem;
  height: 50rem;
  width: 48rem;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  background-color: ${({ theme }) => theme.colors.gray07};
  border-radius: 12px;
  z-index: 99;
  position: relative;

  @media (max-width: 1470px) {
    transform: scale(0.8);
    transform-origin: center;
  }
`;

const Title = styled.h1`
  width: 100%;
  ${fonts.subtitle24B};
  color: ${({ theme }) => theme.colors.gray01};
  padding-bottom: 1.88rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
  margin-bottom: 2.81rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

const CityChoice = styled.div`
  display: flex;
  gap: 1.88rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.56rem;
  margin-top: 2.81rem;
  ${fonts.body20S};
  color: ${({ theme }) => theme.colors.gray01};
`;

const TitleInput = styled.input`
  width: 100%;
  height: 3.75rem;
  padding: 0rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  color: ${({ theme }) => theme.colors.gray03};
  background-color: ${({ theme }) => theme.colors.gray07};
  ${fonts.body20M};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 11.4rem;
  padding: 1.4rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  color: ${({ theme }) => theme.colors.gray03};
  ${fonts.body20M};
  overflow: scroll;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 100%;
  justify-content: center;
`;

export default OpinionModal;
