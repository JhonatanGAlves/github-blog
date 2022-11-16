export const getUserFromGitHub = (username: string): Promise<any> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json().then((data) => data))
    .catch((err) => console.error(err));
};
