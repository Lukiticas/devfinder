import { useEffect, useState } from "react";
import usePersistedState from "./utils/UsePersistedState";

import { AppMain, GlobalStyle } from "./styles/global.styles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import axios from "axios";

import OutletProvider from "./store/OutletProvider";
import Header from "./components/Header/Header.component";
import UserCard from "./components/UserCard/UserCard.component";
import DownloadBar from "./components/DownloadBar/DownloadBar.component";

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
  bio: null | string;
  twitter_username: null | string;
  followers: number;
  following: number;
  created_at: Date | string;
  updated_at: Date | string;
  public_repos: number;
  html_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  hireable: null | boolean;
  public_gists: number;
}

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", dark);
  const [userdata, setUserdata] = useState<userData>();
  const [isOnError, setIsOnError] = useState(false);

  const toggleTheme = (): void => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleErrors = () => {
    setIsOnError(true);
    setTimeout(() => setIsOnError(false), 1000);
  };

  const requestUserdataAPI = async (request: string) => {
    try {
      const API_URL = `https://api.github.com/users/${request}`;
      const API_DATA = await axios.get(API_URL);
      const DATA = API_DATA.data as userData;
      setUserdata(DATA);
    } catch (err) {
      console.error(err);
      handleErrors();
    }
  };

  useEffect(() => {
    requestUserdataAPI("Octocat");
  }, []);

  return (
    <OutletProvider
      theme={theme}
      contextValues={{ requestUserdataAPI, isOnError, userdata, toggleTheme }}
    >
      <GlobalStyle />
      <AppMain className="app">
        <Header />
        <UserCard />
        <DownloadBar />
      </AppMain>
    </OutletProvider>
  );
};
export default App;
