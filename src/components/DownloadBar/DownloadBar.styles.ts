import styled from "styled-components";
import { FormButton } from "../SearchBar/SearchBar.styles";

const DownloadFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.bg400};
  color: ${({ theme }) => theme.colors.wrd400};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  width: 100%;
  height: 3.7rem;
  padding: 0.5rem;
  border-radius: 0.6rem;
  padding-inline-start: 2rem;

  box-shadow: var(--invalid, rgba(99, 99, 99, 0.2)) 0px 2px 8px 0px;
`;

const DLp = styled.p`
  font-weight: 600;
`;

const DLButton = styled(FormButton)`
  background-color: ${({ theme }) => theme.colors.bg600};
  color: ${({ theme }) => theme.colors.wrd400};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: 10rem;

  box-shadow: var(--invalid, rgba(99, 99, 99, 0.2)) 0px 2px 8px 0px;
`;

export { DownloadFooter, DLButton, DLp };
