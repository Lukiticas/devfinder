import styled from "styled-components";

const InfoHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / span;

  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.wrd400};

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 700px) {
    grid-row: 1 / 3;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const InfoHeaderH2 = styled.h2`
  line-height: 1.2;
  text-overflow: ellipsis;
  width: 100%;
  margin-right: auto;

  span {
    display: block;
    font-size: 1rem;
    margin-top: 1ch;
    color: ${(props) => props.theme.colors.acc900};
    line-height: 1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
    span {
      color: ${(props) => props.theme.colors.wrd400};
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 0.5ch;
  }
`;

const HeaderDate = styled.small`
  font-size: 0.8rem;
  width: max-content;
  white-space: nowrap;
`;

export { InfoHeader, InfoHeaderH2, HeaderDate };
