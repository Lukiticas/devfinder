import { useState } from "react";
import usePersistedState from "./utils/UsePersistedState";

import { GlobalStyle } from "./styles/global.styles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import axios from "axios";

import OutletProvider from "./store/OutletProvider";
import Header from "./components/Header/Header.component";
import UserInfo from "./components/UserInfo/UserInfo.component";

//

export interface userData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: null | string;
  location: null | string;
  email: null | string;
  bio: string;
  twitter_username: null | string;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  public_repos: number;
}

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", dark);
  const [userdata, setUserdata] = useState<userData>();

  const toggleTheme = (): void => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const requestUserdataAPI = async (request: string) => {
    const API_URL = `https://api.github.com/users/${request}`;
    const API_DATA = await axios.get(API_URL);
    const DATA = API_DATA.data as userData;
    setUserdata(DATA);
  };

  return (
    <OutletProvider
      theme={theme}
      contextValues={{ requestUserdataAPI, userdata, toggleTheme }}
    >
      <GlobalStyle />
      <main className="app">
        <Header />
        <UserInfo />
      </main>
    </OutletProvider>
  );
};
export default App;
