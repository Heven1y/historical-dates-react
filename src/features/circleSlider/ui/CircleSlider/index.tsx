import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";

import NavigationSwiper from "../NavigationSwiper";
import YearsSwiper from "../YearsSwiper";

import styles from "./CircleSlider.module.scss";

type CircleSliderProps = {
  children: React.ReactNode;
};

export default function CircleSlider({ children }: CircleSliderProps) {
  return (
    <div className={styles["circle-slider"]}>
      <Swiper
        className={styles.swiper}
        wrapperClass={styles["swiper__wrapper"]}
        slidesPerView={1}
        allowTouchMove={false}
        modules={[Navigation, Pagination]}
      >
        <div className={styles["circle-slider__pagination"]}>
          <YearsSwiper />
          <NavigationSwiper />
        </div>
        {children}
      </Swiper>
    </div>
  );
}
