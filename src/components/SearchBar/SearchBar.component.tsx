import { MagnifyingGlass } from "phosphor-react";

import { useState, useContext } from "react";
import UserContext from "../../store/UserContext";

import { Form, FormButton, FormInput, FormLabel } from "./SearchBar.styles";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { requestUserdataAPI, isOnError } = useContext(UserContext);

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
    <Form
      className={isOnError ? "invalid" : ""}
      name="username"
      onSubmit={handleSubmit}
    >
      <FormLabel htmlFor="username">
        <MagnifyingGlass size={"2rem"} color="currentColor" />
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
