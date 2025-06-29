import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 23%;
  left: 20%;
  transform: translate(-50%, 0);
  z-index: 2;
`;

export const Arrow = styled.div<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 2rem;" : "right: 2rem;")}
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  z-index: 3;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.colors.gray07};
  display: flex;
  width: 2.8125rem;
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 75rem;
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  gap: 0.5rem;
`;

export const Dot = styled.div<{ $active: boolean; $color?: string }>`
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme, $color }) =>
    $color === "green" ? theme.colors.green01 : theme.colors.blue01};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  width: ${({ $active }) => ($active ? "2rem" : "0.5rem")};
  transition: width 0.3s ease;
  cursor: pointer;
`;
