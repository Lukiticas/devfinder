import styled from "styled-components";

const InfoHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / span;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.wrd400};

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
  span {
    flex: 1;
    line-height: 1;
    display: block;
    font-size: 1rem;
    margin-top: 1ch;
    color: ${(props) => props.theme.colors.acc900};
  }

  @media screen and (max-width: 700px) {
    span {
      margin-block: 0.5ch;
      color: ${(props) => props.theme.colors.acc900};
    }
  }
`;

const HeaderDate = styled.div``;

export { InfoHeader, InfoHeaderH2, HeaderDate };
