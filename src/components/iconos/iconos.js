import React from "react";
import PlayStore from "../../images/app_store.png";
import GooglePlay from "../../images/google_play.png";
import { Icons, Iconsimg } from "./Styled";

const Iconos = () => {
  return (
    <Icons>
      <a href="https://apps.apple.com/ec/app/cinemark-ecuador/id1181077745">
        <Iconsimg alt="Consiguelo en Playstore" src={PlayStore} />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.cinepapaya.cinemarkecuador&hl=es_EC">
        <Iconsimg alt="Consiguelo en GooglePlay" src={GooglePlay} />
      </a>
    </Icons>
  );
};

export default Iconos;
