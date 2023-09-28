/** @format */

import block from "bem-cn";

import "./Header.scss";
import CyberpunkLogo from "../../ui/logo/CyperpunkLogo";
import YouTubeLogo from "../../ui/icons/socialIcons/YouTubeLogo";
import FacebookRectLogo from "../../ui/icons/socialIcons/FacebookRectLogo";
import InstagrammSquareLogo from "../../ui/icons/socialIcons/InstagrammSquareLogo";
import TwitchLogo from "../../ui/icons/socialIcons/TwitchLogo";
import TwitterSquareLogo from "../../ui/icons/socialIcons/TwitterSquareLogo";
import VkLogo from "../../ui/icons/socialIcons/VkLogo";

const b = block("header");

const Header = () => {
  return (
    <div className={b()}>
      <div className={b("logo-wrapper")}>
        <CyberpunkLogo />
      </div>
      <div className={b("social-icons-wrapper")}>
        <ul className={b("list")}>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <YouTubeLogo />
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <VkLogo />
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <FacebookRectLogo />
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <TwitterSquareLogo />
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <TwitchLogo />
            </a>
          </li>
          <li className={b("list-item")}>
            <a className={b("link")} href="_">
              <InstagrammSquareLogo />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
