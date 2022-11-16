import { useContext } from "react";
import { GitHubContext } from "../../contexts/GitHubContext";
import { SearchContainer, SearchHeader } from "./styles";

export const Search = (): JSX.Element => {
  const { issues } = useContext(GitHubContext);

  return (
    <SearchContainer>
      <SearchHeader>
        <label htmlFor="search-input">Issues</label>
        <span>{`${issues.length} issue${issues.length === 1 ? "" : "s"}`}</span>
      </SearchHeader>
      <input type="text" id="search-input" placeholder="Search issues" />
    </SearchContainer>
  );
};
