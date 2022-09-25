import { DLButton, DLp, DownloadFooter } from "./DownloadBar.styles";

import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { Download } from "phosphor-react";
import { useContext } from "react";
import UserContext from "../../store/UserContext";

const DownloadBar = () => {
  const { userdata } = useContext(UserContext);

  const onButtonClick = () => {
    const domElement = document.getElementById("user-card") as HTMLElement;

    htmlToImage
      .toJpeg(domElement, {
        style: {
          borderRadius: "0",
        },
      })
      .then((dataUrl) => download(dataUrl, `${userdata?.login} github card`))
      .catch((error) => console.error("oops, something went wrong!", error));
  };

  return (
    <DownloadFooter>
      <DLp>Download me as a picture!!</DLp>
      <DLButton onClick={onButtonClick}>
        <Download color="currentColor" width="1rem" />
        Download
      </DLButton>
    </DownloadFooter>
  );
};

export default DownloadBar;
