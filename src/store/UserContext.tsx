import { SetStateAction } from "react";
import { Dispatch } from "react";
import { createContext } from "react";
import { userData } from "../App";

export interface UserContextProps {
  requestUserdataAPI?: (request: string) => Promise<void>;
  userdata?: userData;
  toggleTheme?: () => void;
}

const UserContext = createContext<UserContextProps>({});

export default UserContext;
