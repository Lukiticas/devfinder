import { MapPin, Link, TwitterLogo, Buildings } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { UFooterItem, UFooter } from "./UserFooter.styles";

interface UserFooterProps {
  location: string | null;
  twitter: string | null;
  site: string | null;
  company: string | null;
}

const UserFooter = ({ location, twitter, site, company }: UserFooterProps) => {
  const { colors } = useContext(ThemeContext);
  return (
    <UFooter>
      <UFooterItem className={location ? "" : "disabled"}>
        <a>
          <MapPin
            size="1.4rem"
            weight="fill"
            color={location ? colors.wrd400 : colors.wrd600}
          />
          <p>{location ? location : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={site ? "" : "disabled"}>
        <a>
          <Link
            size="1.4rem"
            weight="fill"
            color={site ? colors.wrd400 : colors.wrd600}
          />
          <p>{site ? site : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={twitter ? "" : "disabled"}>
        <a>
          <TwitterLogo
            size="1.4rem"
            weight="fill"
            color={twitter ? colors.wrd400 : colors.wrd600}
          />
          <p>{twitter ? twitter : "Not available"}</p>
        </a>
      </UFooterItem>
      <UFooterItem className={company ? "" : "disabled"}>
        <a>
          <Buildings
            size="1.4rem"
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
