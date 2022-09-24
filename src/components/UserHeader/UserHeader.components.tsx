import { HeaderDate, InfoHeader, InfoHeaderH2 } from "./UserHeader.styles";
interface UserHeaderProps {
  username: string;
  login: string;
  data: string;
}

const UserHeader = ({ username, login, data }: UserHeaderProps) => {
  return (
    <InfoHeader>
      <InfoHeaderH2>
        {username} <span>@{login}</span>
      </InfoHeaderH2>
      <HeaderDate>
        <small>joined {data}</small>
      </HeaderDate>
    </InfoHeader>
  );
};

export default UserHeader;
