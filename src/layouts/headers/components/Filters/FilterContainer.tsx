// components/FilterWrapper.tsx
import styled from "styled-components";
import FilterItem from "./FilterItem";

interface FilterContainerProps {
  filters: {
    title: string;
    options: string[];
    selected: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
  }[];
}

const FilterContainer = ({ filters }: FilterContainerProps) => {
  return (
    <Wrapper>
      {filters.map((filter) => (
        <FilterItem key={filter.title} {...filter} />
      ))}
    </Wrapper>
  );
};

export default FilterContainer;

// ---------- Styled ----------
const Wrapper = styled.div`
  width: 100%;
  padding: 2.12rem 3.06rem;
  display: flex;
  gap: 2.5rem;
  background-color: ${({ theme }) => theme.colors.blue08};
  border-radius: 0.625rem;
`;
