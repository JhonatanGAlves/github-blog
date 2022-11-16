import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  gap: 8px;

  input {
    outline: none;
    padding: 0.875rem 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;

    color: ${({ theme }) => theme.text};
    background-color: transparent;

    ::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
  }
`;
