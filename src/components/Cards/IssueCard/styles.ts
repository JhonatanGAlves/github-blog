import styled from "styled-components";

export const IssueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme["bg-issue-card"]};

  p {
    line-height: 1.6rem;

    color: ${({ theme }) => theme.text};
  }
`;

export const IssueCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  h3 {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;

    color: ${({ theme }) => theme.title};
  }

  span {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.span};
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  span {
    text-align: right;
  }
`;

export const Badge = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.375rem;
  padding: 0.25rem 0.5rem;

  border-radius: 4px;

  text-transform: capitalize;

  color: ${({ theme }) => theme.title};
  background-color: ${({ isOpen, theme }) =>
    isOpen ? theme.green : theme.blue};
`;
