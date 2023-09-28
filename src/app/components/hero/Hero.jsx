/** @format */

import block from "bem-cn";

import "./Hero.scss";

import CustomButton from "../../ui/button/Button";
import ContentWrapper from "../../ui/contentWrapper/ContentWrapper";
import Header from "../../layouts/header/Header";

const b = block("hero");

const Hero = () => {
  return (
    <div className={b()}>
      <ContentWrapper>
        <Header />
        <div className={b("platform-availability")}>
          <div className={b("inner-wrapper")}>
            <p className={b("test")}>Доступно на всех платформах</p>
            <CustomButton text="Узнать больше" isBlack isLarge />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
