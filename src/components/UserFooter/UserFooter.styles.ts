import styled from "styled-components";

const UFooter = styled.footer`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  color: ${(props) => props.theme.colors.wrd400};

  .disabled {
    & > * {
      pointer-events: none;
      color: ${(props) => props.theme.colors.wrd600} !important;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const UFooterItem = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.acc900};
    }

    & > p {
      overflow: hidden;
      max-width: 20ch;
      text-overflow: ellipsis;
      word-wrap: wrap;
    }
  }
`;

export { UFooter, UFooterItem };
