import { useContext } from "react";
import { GitHubContext } from "../../contexts/GitHubContext";
import { IssueCard } from "../Cards/IssueCard/IssueCard";
import { Search } from "../Search/Search";
import { IssuesCardContent, ListIssuesContainer } from "./styles";

export const ListIssues = (): JSX.Element => {
  const { issues } = useContext(GitHubContext);

  return (
    <ListIssuesContainer>
      <Search />
      <IssuesCardContent>
        {issues.map((i, index) => {
          return (
            <IssueCard
              key={index}
              title={i.title}
              created_at={i.created_at}
              body={i.body}
              state={i.state}
            />
          );
        })}
      </IssuesCardContent>
    </ListIssuesContainer>
  );
};
