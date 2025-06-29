import type { ReactNode } from "react";
import styled from "styled-components";

interface FlexLayoutProps {
  children: ReactNode;
}

const FlexLayout = ({ children }: FlexLayoutProps) => {
  return <FlexLayoutWrapper>{children}</FlexLayoutWrapper>;
};

const FlexLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 9.06rem;
`;

export default FlexLayout;
