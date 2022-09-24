import { HeaderDate, InfoHeader, InfoHeaderH2 } from "./UserHeader.styles";
interface UserHeaderProps {
  username: string | undefined;
  login: string | undefined;
  data: string | undefined;
  link: string | undefined;
}

const UserHeader = ({ username, login, data, link }: UserHeaderProps) => {
  return (
    <InfoHeader>
      <InfoHeaderH2>
        <a href={link} target="_blank">
          {username ? username : login} <span>@{login}</span>
        </a>
      </InfoHeaderH2>
      <HeaderDate>joined {data}</HeaderDate>
    </InfoHeader>
  );
};

export default UserHeader;
