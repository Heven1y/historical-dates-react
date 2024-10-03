import React from "react";

import numToTwoDigits from "../../../../shared/lib/numToTwoDigits";
import { useCircleSliderStore } from "../../store/provider";
import ButtonNavigation from "../ButtonNavigation";

import styles from "./NavigationSwiper.module.scss";

export default function NavigationSwiper() {
  const store = useCircleSliderStore();

  return (
    <div className={styles.nav}>
      <div className={styles["nav__wrapper"]}>
        <span
          className={styles["nav__counter"]}
        >{`${numToTwoDigits(store.activeSlideIndex + 1)}/${numToTwoDigits(store.totalSlides)}`}</span>
        <div className={styles["nav__buttons"]}>
          <ButtonNavigation
            onClick={store.toPrevSlide}
            disabled={store.isStartSlide}
            turnArrowToLeft
          />
          <ButtonNavigation
            onClick={store.toNextSlide}
            disabled={store.isEndSlide}
          />
        </div>
      </div>
    </div>
  );
}
