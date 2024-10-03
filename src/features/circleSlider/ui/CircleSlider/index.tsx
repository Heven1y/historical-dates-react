import React from "react";

import { observer } from "mobx-react";

import { useCircleSliderStore } from "../../store/provider";
import CirclePagination from "../CirclePagination";
import NavigationSwiper from "../NavigationSwiper";
import YearsSwiper from "../YearsSwiper";

import styles from "./CircleSlider.module.scss";

type CircleSliderProps = {
  children: React.ReactNode;
};

function CircleSlider({ children }: CircleSliderProps) {
  const childrenArray = React.Children.toArray(children);
  const { activeSlideIndex } = useCircleSliderStore();

  return (
    <div className={styles["circle-slider"]}>
      <div className={styles["circle-slider__pagination"]}>
        <YearsSwiper>
          <CirclePagination />
        </YearsSwiper>
        <NavigationSwiper />
      </div>
      {childrenArray[activeSlideIndex]}
    </div>
  );
}

export default observer(CircleSlider);
