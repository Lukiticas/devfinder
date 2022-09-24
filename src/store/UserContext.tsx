import { createContext } from "react";
import { userData } from "../App";

export interface UserContextProps {
  requestUserdataAPI?: (request: string) => Promise<void>;
  userdata?: userData;
  toggleTheme?: () => void;
  isOnError?: boolean;
}

const UserContext = createContext<UserContextProps>({});

export default UserContext;
