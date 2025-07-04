import { fonts } from "@styles/fonts";
import styled from "styled-components";

interface EnvIssueCardProps {
  img: string;
  date: string;
  content: string;
}

const EnvIssueCard = ({ img, date, content }: EnvIssueCardProps) => {
  return (
    <EnvIssueCardWrapper>
      <img src={img} />
      <EnvIssueContent>
        <Date>{date}</Date>
        <Content>{content}</Content>
      </EnvIssueContent>
    </EnvIssueCardWrapper>
  );
};

const EnvIssueCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    width: 14.6rem;
    height: 12.2rem;
  }
`;

const EnvIssueContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 14.6rem;
`;

const Date = styled.p`
  ${fonts.body20S};
  color: ${({ theme }) => theme.colors.gray01};
`;

const Content = styled.p`
  white-space: pre-line;
  ${fonts.body20M};
  color: ${({ theme }) => theme.colors.gray03};
`;

export default EnvIssueCard;
