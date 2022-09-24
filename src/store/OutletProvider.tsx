import { DefaultTheme, ThemeProvider } from "styled-components";
import UserContext, { UserContextProps } from "./UserContext";

interface Props {
  theme: DefaultTheme;
  children: React.ReactNode;
  contextValues: UserContextProps;
}

const OutletProvider = ({ children, theme, contextValues }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={contextValues}>
        {children}
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default OutletProvider;
