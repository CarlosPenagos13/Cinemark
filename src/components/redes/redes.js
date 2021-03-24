import React from "react";
import Principal from "../../images/site_link.png";
import Facebook from "../../images/fb_link.png";
import Instagram from "../../images/ig_link.png";
import Twitter from "../../images/twitter_link.png";
import { RedesContainer, Redesimg, SocialLink } from "./Styled";

const Redes = () => {
  return (
    <SocialLink>
      <RedesContainer>
        <a href="https://www.cinemark.com.ec/">
          <Redesimg alt="Link principal" src={Principal} />
        </a>
        <a href="https://www.facebook.com/CinemarkEcuador/">
          <Redesimg alt="Link facebook" src={Facebook} />
        </a>
      </RedesContainer>
      <RedesContainer>
        <a href="https://www.instagram.com/cinemarkec/">
          <Redesimg alt="Link instagram" src={Instagram} />
        </a>
        <a href="https://twitter.com/cinemarkec">
          <Redesimg alt="Links twitter" src={Twitter} />
        </a>
      </RedesContainer>
    </SocialLink>
  );
};

export default Redes;
