import { UserCard } from "../../components/Cards/UserCard/UserCard";
import { Header } from "../../components/Header/Header";
import { HomeContainer, MainContainer } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <UserCard />
      </MainContainer>
    </HomeContainer>
  );
};
