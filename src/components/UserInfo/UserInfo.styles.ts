import styled from "styled-components";

const UserSection = styled.section`
  background-color: ${(props) => props.theme.colors.bg400};
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 5rem auto 1fr;
  gap: 1.5rem;

  .infos {
    grid-column: 2 / span;

    display: grid;
    gap: 1.5rem;

    @media screen and (max-width: 700px) {
      grid-column: 1 / 3;
    }
  }
`;

const InfoIcon = styled.img`
  grid-row: 1 / 3;
  place-self: start;
  width: 9rem;
  height: 9rem;
  background-color: white;
  border-radius: 100vw;
  display: grid;
  place-items: center;
`;

const InfoBio = styled.div`
  color: ${(props) => props.theme.colors.wrd400};
`;

export { UserSection, InfoBio, InfoIcon };
