import styled from "styled-components";

const StatsBody = styled.div`
  grid-area: "stats";
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 1.5em;
  padding-block: 1em;

  background-color: ${(props) => props.theme.colors.bg600};
  color: ${(props) => props.theme.colors.wrd400};

  border-radius: 0.8rem;
`;

const StatsItem = styled.div`
  h4 {
    font-size: 0.9rem;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export { StatsBody, StatsItem };
