import styled from "styled-components";
import FilterItem, { type OptionItem } from "./FilterItem";
import { useLanguage } from "src/hooks/useLanguage";

interface FilterContainerProps {
  filters: {
    title: string;
    options: OptionItem[];
    selected: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
  }[];
}

const FilterContainer = ({ filters }: FilterContainerProps) => {
  const language = useLanguage();
  return (
    <FilterContainerWrapper $lang={language}>
      {filters.map((filter) => (
        <FilterItem key={filter.title} {...filter} />
      ))}
    </FilterContainerWrapper>
  );
};

export default FilterContainer;

const FilterContainerWrapper = styled.div<{ $lang: "ko" | "en" }>`
  margin-top: 2.81rem;
  width: 100%;
  padding: 2.12rem 3.06rem;
  display: flex;
  gap: ${({ $lang }) => ($lang === "en" ? "1.5rem" : "2.5rem")};
  background-color: ${({ theme }) => theme.colors.blue08};
  border-radius: 0.625rem;
`;
