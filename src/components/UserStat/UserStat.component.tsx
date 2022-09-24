import { StatsBody, StatsItem } from "./UserStat.styles";

interface UserStatProps {
  repos: number;
  followers: number;
  following: number;
}

const UserStat = ({ repos, followers, following }: UserStatProps) => {
  return (
    <StatsBody>
      <StatsItem>
        <h4>Repos</h4>
        <p>{repos}</p>
      </StatsItem>
      <StatsItem>
        <h4>Followers</h4>
        <p>{followers}</p>
      </StatsItem>
      <StatsItem>
        <h4>following</h4>
        <p>{following}</p>
      </StatsItem>
    </StatsBody>
  );
};

export default UserStat;
