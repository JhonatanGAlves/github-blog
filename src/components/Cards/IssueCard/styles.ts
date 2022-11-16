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
