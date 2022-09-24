import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.wrd400};
  height: 7rem;
`;

const TitleH1 = styled.h1``;

const ToggleButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.wrd400};
  display: flex;
  place-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 0;
  outline: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.bg400};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const ToggleTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.3ch;
  font-size: 0.7rem;
`;

const ToggleIcon = styled.div`
  background-color: transparent;
  display: grid;
  place-items: center;
  border: 0;
  outline: 0;
`;

export { Navbar, ToggleButton, TitleH1, ToggleIcon, ToggleTitle };
