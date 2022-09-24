import SearchBar from "../SearchBar/SearchBar.component";
import TitleAndSwitch from "../TitleAndSwitch/TitleAndSwitch.component";
import { WrapperHeader } from "./Header.styles";

const Header = () => {
  return (
    <WrapperHeader>
      <TitleAndSwitch />
      <SearchBar />
    </WrapperHeader>
  );
};

export default Header;
