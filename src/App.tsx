import { ThemeProvider } from "styled-components";
import { GitHubProvider } from "./contexts/GitHubContext";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <GitHubProvider>
        <Home />
      </GitHubProvider>
    </ThemeProvider>
  );
};
