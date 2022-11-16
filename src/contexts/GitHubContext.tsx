import { createContext, ReactNode, useEffect, useState } from "react";
import { getAllIssuesThisProject, getUserFromGitHub } from "../api/api";

type UserCardType = {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
};

type IssuesType = {
  id: number;
  title: string;
  body: string;
  state: string;
  comments: number;
  created_at: string;
  html_url: string;
};

type GitHubContextType = {
  user: UserCardType;
  issues: IssuesType[];
};

interface GitHubProviderProps {
  children: ReactNode;
}

export const GitHubContext = createContext({} as GitHubContextType);

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
  const [user, setUser] = useState<UserCardType>({} as UserCardType);
  const [issues, setIssues] = useState<IssuesType[]>([]);

  useEffect(() => {
    getUserFromGitHub("JhonatanGAlves").then(setUser);
    getAllIssuesThisProject("JhonatanGAlves", "github-blog").then(setIssues);
  }, []);

  return (
    <GitHubContext.Provider value={{ user, issues }}>
      {children}
    </GitHubContext.Provider>
  );
};
