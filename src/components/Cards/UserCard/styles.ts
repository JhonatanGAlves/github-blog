import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: -87px;
  padding: 2.5rem 2rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme["bg-profile-card"]};

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const UserCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 8px 0 24px;
    line-height: 1.6rem;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkToProfile = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.blue};
`;

export const UserCardFooter = styled.div`
  display: flex;
  gap: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 1.125rem;

    color: ${({ theme }) => theme.label};
  }

  label {
    color: ${({ theme }) => theme.subtitle};
  }

  a {
    text-decoration: none;

    color: ${({ theme }) => theme.subtitle};

    :hover {
      text-decoration: underline;
    }

    label {
      cursor: pointer;
    }
  }
`;
