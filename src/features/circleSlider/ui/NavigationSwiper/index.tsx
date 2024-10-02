import React from "react";

import { SwiperClass, useSwiper } from "swiper/react";

import numToTwoDigits from "../../../../shared/lib/numToTwoDigits";
import ButtonNavigation from "../ButtonNavigation";

import styles from "./NavigationSwiper.module.scss";

export default function NavigationSwiper() {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = React.useState(swiper.activeIndex);
  const [isAllowSwitch, setIsAllowSwitch] = React.useState({
    prev: swiper.isBeginning,
    next: swiper.isEnd,
  });

  React.useEffect(() => {
    swiper.on("slideChange", (swipe: SwiperClass) => {
      setActiveIndex(swipe.activeIndex);
      setIsAllowSwitch({
        prev: swipe.isBeginning,
        next: swipe.isEnd,
      });
    });

    return () => {
      swiper.off("slideChange");
    };
  }, [swiper]);

  const toPrevSlide = React.useCallback(() => {
    swiper.slidePrev();
  }, [swiper]);

  const toNextSlide = React.useCallback(() => {
    swiper.slideNext();
  }, [swiper]);

  return (
    <div className={styles.nav}>
      <div className={styles["nav__wrapper"]}>
        <span
          className={styles["nav__counter"]}
        >{`${numToTwoDigits(activeIndex + 1)}/${numToTwoDigits(swiper.slides.length)}`}</span>
        <div className={styles["nav__buttons"]}>
          <ButtonNavigation
            disabled={isAllowSwitch.prev}
            onClick={toPrevSlide}
            turnArrowToLeft
          />
          <ButtonNavigation
            disabled={isAllowSwitch.next}
            onClick={toNextSlide}
          />
        </div>
      </div>
    </div>
  );
}
