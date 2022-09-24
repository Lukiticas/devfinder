import { useContext } from "react";
import UserContext from "../../store/UserContext";

import UserStat from "../UserStat/UserStat.component";
import UserFooter from "../UserFooter/UserFooter.component";
import UserHeader from "../UserHeader/UserHeader.component";

import { InfoBio, InfoIcon, UserSection, UserWidgets } from "./UserCard.styles";

const UserCard = () => {
  const { userdata } = useContext(UserContext);

  const formatDate = (date: Date) => {
    const newDate = new Date(date).toUTCString();
    const UTCstring = newDate.split(", ")[1].slice(0, 11);
    return UTCstring;
  };

  return (
    <UserSection>
      <InfoIcon
        src={userdata?.avatar_url}
        alt="icon"
        className={`${userdata?.login}-icon`}
      />
      <UserHeader
        link={userdata?.html_url}
        data={formatDate(userdata?.created_at as Date)}
        login={userdata?.login}
        username={userdata?.name}
      />

      <UserWidgets>
        <InfoBio>
          {userdata?.bio ? userdata.bio : "This profile has not bio..."}
        </InfoBio>
        <UserStat
          followers={userdata?.followers}
          following={userdata?.following}
          repos={userdata?.public_repos}
          html_url={userdata?.html_url}
        />
        <UserFooter
          company={userdata?.company}
          location={userdata?.location}
          site={userdata?.blog}
          twitter={userdata?.twitter_username}
        />
      </UserWidgets>
    </UserSection>
  );
};

export default UserCard;
