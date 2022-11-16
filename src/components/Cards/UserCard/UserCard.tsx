import { useContext } from "react";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";
import {
  InfoContainer,
  LinkToProfile,
  UserCardContainer,
  UserCardContent,
  UserCardFooter,
  UserCardHeader,
} from "./styles";
import { GitHubContext } from "../../../contexts/GitHubContext";

export const UserCard = (): JSX.Element => {
  const { user } = useContext(GitHubContext);

  return (
    <UserCardContainer>
      <img src={user.avatar_url} alt="Profile image" />
      <UserCardContent>
        <UserCardHeader>
          <h3>{user.name}</h3>
          <LinkToProfile href={user.html_url}>
            <span>github</span>
            <ArrowSquareOut />
          </LinkToProfile>
        </UserCardHeader>
        <p>{user.bio}</p>
        <UserCardFooter>
          <InfoContainer>
            <GithubLogo />
            <a href={user.avatar_url}>
              <label>{user.login}</label>
            </a>
          </InfoContainer>
          {user.company && (
            <InfoContainer>
              <Buildings />
              <label>{user.company}</label>
            </InfoContainer>
          )}
          <InfoContainer>
            <Users />
            <label>{`${user.followers} followers`}</label>
          </InfoContainer>
        </UserCardFooter>
      </UserCardContent>
    </UserCardContainer>
  );
};
