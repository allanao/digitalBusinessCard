import React from "react";
import twitterIcon from "../images/Twitter-Icon.png";
import githubIcon from "../images/GitHub-Icon.png";
import instagramIcon from "../images/Instagram-Icon.png";


function Footer() {
  return (
    <div id="footer">
      <img src={twitterIcon} alt="twitterIcon" />
      <img src={githubIcon} alt="githubIcon" />
      <img src={instagramIcon} alt="instagramIcon" />
    </div>
  );
}

export default Footer;