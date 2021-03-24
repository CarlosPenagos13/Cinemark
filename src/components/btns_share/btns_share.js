import React from "react";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsapp.svg";
import Messenger from "../../images/messenger.svg";
import Twitter from "../../images/twitter.svg";
import Email from "../../images/email.svg";
import {
  ShareBtns,
  ShareBtnsContainer,
  ShareBtnsEmail,
  ShareBtnsFacebook,
  ShareBtnsMessenger,
  ShareBtnsTwitter,
  ShareBtnsWhatsapp,
} from "./btns_share.style";

const BtnsShare = () => {
  return (
    <ShareBtns>
      <ShareBtnsContainer>
        <ShareBtnsFacebook
          target="pop-up"
          href="https://www.facebook.com/sharer.php?t=Cinemark%20Ecuador&u=http%3A%2F%2Farworkinprogress.com%2Fcinemark%2F"
        >
          <img alt="facebook_share" src={Facebook} />
        </ShareBtnsFacebook>
        <ShareBtnsWhatsapp target="pop-up" href="https://web.whatsapp.com">
          <img alt="whatsapp_share" src={Whatsapp} />
        </ShareBtnsWhatsapp>
        <ShareBtnsMessenger
          target="pop-up"
          href="https://www.facebook.com/dialog/send?link=http%3A%2F%2Farworkinprogress.com%2Fcinemark%2F&app_id=521270401588372&redirect_uri=https%3A%2F%2Fwww.sharethis.com"
        >
          <img alt="messenger_share" src={Messenger} />
        </ShareBtnsMessenger>
        <ShareBtnsTwitter
          target="pop-up"
          href="https://twitter.com/intent/tweet?text=Cinemark%20Ecuador&url=http%3A%2F%2Farworkinprogress.com%2Fcinemark%2F"
        >
          <img alt="twitter_share" src={Twitter} />
        </ShareBtnsTwitter>
        <ShareBtnsEmail
          target="pop-up"
          href="https://go.microsoft.com/fwlink/?LinkId=550986"
        >
          <img alt="email_share" src={Email} />
        </ShareBtnsEmail>
      </ShareBtnsContainer>
    </ShareBtns>
  );
};

export default BtnsShare;
