import { createContext, ReactNode, useEffect, useState } from "react";
import { getUserFromGitHub } from "../api/api";

type UserCardType = {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  html_url: string;
};

type GitHubContextType = {
  user: UserCardType;
};

interface GitHubProviderProps {
  children: ReactNode;
}

export const GitHubContext = createContext({} as GitHubContextType);

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
  const [user, setUser] = useState<UserCardType>({} as UserCardType);

  useEffect(() => {
    getUserFromGitHub("JhonatanGAlves").then(setUser);
  }, []);

  return (
    <GitHubContext.Provider value={{ user }}>{children}</GitHubContext.Provider>
  );
};
