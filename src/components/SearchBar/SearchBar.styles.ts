import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  height: 3.7rem;
  padding: 0.5rem;
  padding-inline-start: 1.4rem;
  gap: 1rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.bg400};
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus-within {
    outline: 0.02rem solid ${(props) => props.theme.colors.acc900};
  }

  &:hover {
    svg {
      transform: rotate(90deg);
    }
    &:not(:focus-within) {
      box-shadow: ${(props) => props.theme.colors.acc900} 1.95px 1.95px 2.6px;
    }
  }
`;

const FormInput = styled.input`
  height: 100%;
  flex: 1;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.wrd400};

  &::placeholder {
    color: ${(props) => props.theme.colors.wrd600};
  }
`;

const FormLabel = styled.label`
  cursor: pointer;
  display: grid;
  place-items: center;

  & > svg {
    transition: all 100ms ease-in;
  }
`;

const FormButton = styled.button`
  transition: all 100ms ease-in;
  cursor: pointer;
  height: 100%;
  border: none;
  text-transform: capitalize;
  font-weight: 600;

  background-color: ${(props) => props.theme.colors.acc900};
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.wrd400
      : props.theme.colors.bg600};
  width: 7rem;
  border-radius: 0.7rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.wrd400};
    color: ${(props) => props.theme.colors.acc900};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export { Form, FormButton, FormInput, FormLabel };
