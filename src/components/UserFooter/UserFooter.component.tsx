import { MapPin, Link, TwitterLogo, Buildings } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { UFooterItem, UFooter } from "./UserFooter.styles";

interface UserFooterProps {
  location: string | null | undefined;
  twitter: string | null | undefined;
  site: string | null | undefined;
  company: string | null | undefined;
}

const UserFooter = ({ location, twitter, site, company }: UserFooterProps) => {
  const { colors } = useContext(ThemeContext);
  return (
    <UFooter>
      <UFooterItem className={location ? "" : "disabled"}>
        <a
          href={
            location ? `https://www.google.com/maps/place/${location}` : "#"
          }
          target="_blank"
        >
          <MapPin
            size="1.6rem"
            weight="fill"
            color={location ? colors.wrd400 : colors.wrd600}
          />
          <p>{location ? location : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={site ? "" : "disabled"}>
        <a href={site ? site : "#"} target="_blank">
          <Link
            size="1.6rem"
            weight="fill"
            color={site ? colors.wrd400 : colors.wrd600}
          />
          <p>{site ? site : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={twitter ? "" : "disabled"}>
        <a
          href={twitter ? `https://twitter.com/${twitter}` : "#"}
          target="_blank"
        >
          <TwitterLogo
            size="1.6rem"
            weight="fill"
            color={twitter ? colors.wrd400 : colors.wrd600}
          />
          <p>{twitter ? twitter : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={company ? "" : "disabled"}>
        <a>
          <Buildings
            size="1.6rem"
            weight="fill"
            color={company ? colors.wrd400 : colors.wrd600}
          />
          <p>{company ? company : "Not available"}</p>
        </a>
      </UFooterItem>
    </UFooter>
  );
};

export default UserFooter;
