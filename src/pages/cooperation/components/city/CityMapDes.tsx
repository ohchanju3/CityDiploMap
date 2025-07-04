import Chip from "@components/ChipBadge";
import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface Props {
  title: string;
  chips: { text: string; bgColor?: string; textColor?: string }[];
  description: string;
}

const CityMapDes = ({ title, chips, description }: Props) => {
  const safeDescription = description || "";
  return (
    <BlockWrapper>
      <TitleContainer>
        <p>{title}</p>
        <ChipList>
          {chips.map((chip, idx) => (
            <Chip
              key={idx}
              text={chip.text}
              bgColor={chip.bgColor}
              textColor={chip.textColor}
              borderRadius="1.87rem"
              padding="0.5rem 0.88rem"
            />
          ))}
        </ChipList>
      </TitleContainer>
      <BlockWrapperText translate="no">{safeDescription}</BlockWrapperText>
    </BlockWrapper>
  );
};

export default CityMapDes;

const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;
`;

const TitleContainer = styled.section`
  display: flex;
  gap: 0.94rem;
  align-items: center;

  p {
    ${fonts.body20B}
    color: ${({ theme }) => theme.colors.blue01};
  }
`;

const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.62rem;
`;

const BlockWrapperText = styled.span`
  ${fonts.body20M};
  color: ${({ theme }) => theme.colors.gray03};
  white-space: pre-line;
`;
