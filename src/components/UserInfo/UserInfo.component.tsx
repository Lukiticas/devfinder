import { useContext } from "react";
import UserContext from "../../store/UserContext";

import UserStat from "../UserStat/UserStat.component";
import UserFooter from "../UserFooter/UserFooter.component";
import UserHeader from "../UserHeader/UserHeader.components";

import { InfoBio, InfoIcon, UserSection } from "./UserInfo.styles";

const UserInfo = () => {
  const { userdata } = useContext!(UserContext);

  const formatDate = (date: Date) => {
    const newDate = new Date(date).toUTCString();
    const UTCstring = newDate
      .split(" ")
      .slice(0, 4)
      .join(" ");
    return UTCstring;
  };

  return (
    <UserSection>
      <InfoIcon
        src={userdata ? userdata.avatar_url : "/favicon.png"}
        alt="icon"
        className={`${userdata?.login}-icon`}
      />
      <UserHeader
        data={userdata ? formatDate(userdata.created_at) : "25 jan 2011"}
        login={userdata ? userdata.login : "octocat"}
        username={userdata ? userdata.name : "The Octocat"}
      />

      <section className="infos">
        {userdata ? (
          <>
            <InfoBio className="info-bio">
              <p>
                {userdata.bio ? userdata.bio : "This profile has no bio..."}
              </p>
            </InfoBio>
            <UserStat
              followers={userdata.followers}
              following={userdata.following}
              repos={userdata.public_repos}
            />
            <UserFooter
              company={userdata.company}
              location={userdata.location}
              site={userdata.blog}
              twitter={userdata.twitter_username}
            />
          </>
        ) : (
          <>
            <InfoBio className="info-bio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, quasi. Sed dignissimos quam, rerum debitis
              </p>
            </InfoBio>
            <UserStat followers={3938} following={9} repos={9} />
            <UserFooter
              company="@github"
              location="San Francisco"
              site="https://github.blog"
              twitter=""
            />
          </>
        )}
      </section>
    </UserSection>
  );
};

export default UserInfo;
