import styled from "styled-components";

const UserSection = styled.section`
  background-color: ${(props) => props.theme.colors.bg400};
  max-width: 100%;
  padding: 2rem;
  padding-block-end: 3rem;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 5rem auto 1fr;
  gap: 1.5rem;

  animation-fill-mode: backwards;
  animation: scale 200ms ease-in;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @keyframes scale {
    from {
      transform: scaleY(0);
      transform-origin: top;
    }
    to {
      transform: scaleY(1);
      transform-origin: top;
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

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const InfoBio = styled.p`
  max-width: none;
  text-overflow: initial;
  white-space: normal;
  overflow: auto;
  position: relative;
  top: 4px;
  word-wrap: break-word;

  color: ${(props) => props.theme.colors.wrd400};
`;

const UserWidgets = styled.div`
  grid-column: 2 / span;

  display: grid;
  gap: 1.5rem;

  @media screen and (max-width: 700px) {
    grid-column: 1 / 3;
  }
`;

export { UserSection, UserWidgets, InfoBio, InfoIcon };
