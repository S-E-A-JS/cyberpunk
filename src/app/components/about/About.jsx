/** @format */

import block from "bem-cn";

import "./About.scss";

import about_1 from "./assets/about_1.jpg";
import about_2 from "./assets/about_2.jpg";
import about_3 from "./assets/about_3.jpg";

import ContentWrapper from "../../ui/contentWrapper/ContentWrapper";

const b = block("about");

const About = () => {
  return (
    <div className={b()}>
      <ContentWrapper>
        <div className={b("info")}>
          <h2 className={b("title")}>Найт-Сити изменит тебя навсегда</h2>
          <p className={b("text")}>
            <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
            которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
            модификации тела ценятся выше всего. Ты играешь за V, наёмника в
            поисках устройства, позволяющего обрести бессмертие. Ты сможешь
            менять киберимпланты, навыки и стиль игры своего персонажа, исследуя
            открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя
            окружает.
          </p>
        </div>
        <div className={b("images-wrapper")}>
          <div className={b("first-column")}>
            <img className={b("image")} src={about_1} alt="Night-City_1" />
            <img className={b("image")} src={about_2} alt="Night-City_2" />
          </div>
          <div className={b("second-column")}>
            <img className={b("image")} src={about_3} alt="Night-City_3" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
