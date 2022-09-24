import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import UserContext from "../../store/UserContext";
import { Form, FormButton, FormInput, FormLabel } from "./SearchBar.styles";

const SearchBar = () => {
  const { colors } = useContext<DefaultTheme>(ThemeContext);
  const [inputValue, setInputValue] = useState("");
  const { requestUserdataAPI } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    const value = inputValue.trim();
    requestUserdataAPI!(value);
  };

  return (
    <Form name="username" onSubmit={handleSubmit}>
      <FormLabel htmlFor="username">
        <MagnifyingGlass size={"2rem"} color={colors.acc900} />
      </FormLabel>
      <FormInput
        required
        name="username"
        id="username"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Github Username..."
      />
      <FormButton type="submit">search</FormButton>
    </Form>
  );
};

export default SearchBar;
