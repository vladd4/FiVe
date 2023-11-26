import styles from "./Slider.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useRef } from "react";

import Car from "../../assets/porsche-main-image.png";
import Tg from "../../assets/telegram-icon.png";

const Slider = () => {
  const sliderRef = useRef(null);
  return (
    <Splide
      ref={sliderRef}
      options={{
        height: "100%",
        type: "loop",
        focus: "center",
        drag: true,
        perPage: 1,
        arrows: false,
      }}
      className={styles.root}
    >
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <img alt="Telegram" src={Tg} />
            </p>
          </div>
          <img alt="Porsche" src={Car} />
        </article>
      </SplideSlide>
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <img alt="Telegram" src={Tg} />
            </p>
          </div>
          <img alt="Porsche" src={Car} />
        </article>
      </SplideSlide>
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <img alt="Telegram" src={Tg} />
            </p>
          </div>
          <img alt="Porsche" src={Car} />
        </article>
      </SplideSlide>
    </Splide>
  );
};
export default Slider;
