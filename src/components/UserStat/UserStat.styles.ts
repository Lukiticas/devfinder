import styled from "styled-components";

const StatsBody = styled.div`
  grid-area: "stats";
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 0.5em;
  padding-block: 0.5em;
  gap: 1rem;

  background-color: ${(props) => props.theme.colors.bg600};
  color: ${(props) => props.theme.colors.wrd400};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  border-radius: 0.8rem;
`;

const StatsItem = styled.a`
  padding: 1em;
  padding-block: 0.8em;

  border-radius: 1rem;
  animation-delay: 200ms;

  text-decoration: none;
  color: inherit;

  h4 {
    font-size: 0.9rem;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.bg400};
    cursor: pointer;
  }

  &:active {
    filter: grayscale(1);
  }
`;

export { StatsBody, StatsItem };
