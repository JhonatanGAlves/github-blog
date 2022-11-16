import { UserCard } from "../../components/Cards/UserCard/UserCard";
import { Header } from "../../components/Header/Header";
import { ListIssues } from "../../components/ListIssues/ListIssues";
import { HomeContainer, MainContainer } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <UserCard />
        <ListIssues />
      </MainContainer>
    </HomeContainer>
  );
};
