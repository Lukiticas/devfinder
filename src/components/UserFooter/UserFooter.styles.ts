import styled from "styled-components";

const UFooter = styled.footer`
  grid-area: "footer";
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  color: ${(props) => props.theme.colors.wrd400};

  .disabled {
    & > * {
      pointer-events: none;
      color: ${(props) => props.theme.colors.wrd600} !important;
    }
  }
`;

const UFooterItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-overflow: ellipsis;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.acc900};
    }

    & > * {
      overflow: hidden;
      max-width: 16ch;
      text-overflow: ellipsis;
      word-wrap: wrap;
    }
  }
`;

export { UFooter, UFooterItem };
