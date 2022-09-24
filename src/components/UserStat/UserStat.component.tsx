import { StatsBody, StatsItem } from "./UserStat.styles";

interface UserStatProps {
  repos: number | undefined;
  followers: number | undefined;
  following: number | undefined;
  html_url: string | undefined;
}

const UserStat = ({
  repos = 0,
  followers = 0,
  following = 0,
  html_url,
}: UserStatProps) => {
  return (
    <StatsBody>
      <StatsItem
        target="_blank"
        href={repos ? html_url + "?tab=repositories" : "#"}
      >
        <h4>Repos</h4>
        <p>{repos}</p>
      </StatsItem>
      <StatsItem
        target="_blank"
        href={followers ? html_url + "?tab=followers" : "#"}
      >
        <h4>Followers</h4>
        <p>{followers}</p>
      </StatsItem>
      <StatsItem
        target="_blank"
        href={followers ? html_url + "?tab=following" : "#"}
      >
        <h4>following</h4>
        <p>{following}</p>
      </StatsItem>
    </StatsBody>
  );
};

export default UserStat;
