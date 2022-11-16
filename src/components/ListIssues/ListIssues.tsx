import { Search } from "../Search/Search";
import { ListIssuesContainer } from "./styles";

export const ListIssues = (): JSX.Element => {
  return (
    <ListIssuesContainer>
      <Search />
    </ListIssuesContainer>
  );
};
