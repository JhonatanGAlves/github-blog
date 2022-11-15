import styled from "styled-components";
import bgImage from "../../assets/bg-image.png";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.875rem 0;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
