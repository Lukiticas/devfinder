import { DefaultTheme, ThemeContext } from "styled-components";
import { useContext } from "react";
import { Sun, Moon } from "phosphor-react";
import {
  Navbar,
  TitleH1,
  ToggleButton,
  ToggleIcon,
  ToggleTitle,
} from "./TitleAndSwitch.styles";
import UserContext from "../../store/UserContext";

const TitleAndSwitch = () => {
  const { title, colors } = useContext<DefaultTheme>(ThemeContext);
  const { toggleTheme } = useContext(UserContext);

  return (
    <Navbar>
      <TitleH1>Devfinder</TitleH1>
      <ToggleButton onClick={toggleTheme}>
        <ToggleTitle>{title === "dark" ? "light" : "dark"}</ToggleTitle>
        <ToggleIcon>
          {title === "dark" ? (
            <Sun weight="fill" size={"1.6rem"} color={colors.wrd400} />
          ) : (
            <Moon weight="fill" size={"1.6rem"} color={colors.wrd400} />
          )}
        </ToggleIcon>
      </ToggleButton>
    </Navbar>
  );
};

export default TitleAndSwitch;
