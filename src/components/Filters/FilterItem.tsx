import styled from "styled-components";
import { useState } from "react";
import { fonts } from "@styles/fonts";

interface FilterItemProps {
  title: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
  gap?: string;
}

const FilterItem = ({
  title,
  options,
  selected,
  onSelect,
  placeholder = "선택",
  gap = "0.5rem",
}: FilterItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <FilterItemWrapper $gap={gap}>
      <FilterItemTitle>{title}</FilterItemTitle>
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown} $hasValue={!!selected}>
          {selected || placeholder}
          <img
            src={isOpen ? "/icons/arrowUp.svg" : "/icons/arrowDown.svg"}
            alt="toggle"
          />
        </DropdownButton>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem key={option} onClick={() => handleSelect(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </FilterItemWrapper>
  );
};

export default FilterItem;

const FilterItemWrapper = styled.div<{ $gap: string }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap};
`;

const FilterItemTitle = styled.p`
  ${fonts.body18S}
  color: ${({ theme }) => theme.colors.gray01};
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownButton = styled.section<{ $hasValue: boolean }>`
  width: 100%;
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.colors.gray07};
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.38rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${fonts.body18M};
  color: ${({ $hasValue, theme }) =>
    $hasValue ? theme.colors.gray02 : theme.colors.gray05};

  img {
    width: 16px;
    height: 16px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray07};
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 0.38rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 10px 12px;
  ${fonts.body18M};
  color: ${({ theme }) => theme.colors.gray02};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue07};
    color: ${({ theme }) => theme.colors.blue01};
  }
`;
